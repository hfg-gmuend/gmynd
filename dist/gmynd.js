window.gmynd = (function() {

  return {

    // JSON / Object manipulation related:
    // ===================================

    // Data is always a JSON representation of a table, which is an array
    // of objects like [{Gender:'F', Age:32}, {Gender:'M', Age:73}, ...]

    groupData: function(data, props) {
      if (!this.isArray(props)) props = [props];
      let result = {};
      // group on the first key from the given array
      let key = props.shift();
      for (let i = 0; i < data.length; i++) {
        let dat = data[i];
        // make an array for every unique value for that key
        // and fill it with every row that has that value
        if (Array.isArray(dat[key])) {
          for (let j = 0; j < dat[key].length; j++) {
            let val = dat[key][j];
            if (!result[val]) {
              result[val] = []
            }
            result[val].push(dat);
          }
        } else {
          let val = dat[key];
          if (!result[val]) {
            result[val] = []
          }
          result[val].push(dat);
        }
      }

      // as long as there are keys for grouping ...
      if (props.length > 0) {
        // group every entry on the next key
        let groups = Object.entries(result);
        for (let i = 0; i < groups.length; i++) {
          res = this.groupData(groups[i][1], [...props]);
          result[groups[i][0]] = res;
        }
      }

      return result;
    },

    cumulateData: function(data, props, calculations = []) {
      if (!this.isArray(props)) props = [props];

      let groupedData = {};

      // group all 'rows' of the original data
      for (let i = 0; i < data.length; i++) {
        let key = data[i][props[0]];
        for (let j = 1; j < props.length; j++) {
          key += ',' + data[i][props[j]];
        }

        if (!groupedData[key]) {
          groupedData[key] = [];
        }

        groupedData[key].push(data[i]);
      }

      // convert values of the object to array
      groupedData = Object.values(groupedData);
      // console.log(groupedData);

      let cumulatedData = [];
      for (let i = 0; i < groupedData.length; i++) {
        // prepare an object for the results
        let result = {};
        // put in the keys and values of props
        for (let j = 0; j < props.length; j++) {
          result[props[j]] = groupedData[i][0][props[j]];
        }
        // add the counter
        result.count = groupedData[i].length;
        // apply calculations
        for (let j = 0; j < calculations.length; j++) {
          let key = calculations[j].title;
          if (!key) key = calculations[j].value + calculations[j].method;
          // collect values to plain array
          result[key] = groupedData[i].map(x => parseFloat(x[calculations[j].value]));
          // console.log(result[key])

          if (calculations[j].method === "Sum") {
            result[key] = result[key].reduce((res, x) => res + x);
          }
          if (calculations[j].method === "Average") {
            result[key] = result[key].reduce((res, x) => res + x) / result.count;
          }
          if (calculations[j].method === "Min") {
            result[key] = result[key].reduce((res, x) => (res < x ? res : x));
          }
          if (calculations[j].method === "Max") {
            result[key] = result[key].reduce((res, x) => (res > x ? res : x));
          }
          if (calculations[j].method === "Median") {
            result[key] = percentile(result[key], 0.5);
          }
          if (calculations[j].method === "Percentile") {
            result[key] = percentile(result[key], calculations[j].p);
          }
        }

        cumulatedData.push(result);
      }

      return cumulatedData;

      function percentile(arr, p) {
        arr.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0);
        let l = arr.length - 1;
        let idx = l * p;
        let frac = idx % 1;
        let val0 = arr[Math.floor(idx)];
        let val1 = arr[Math.ceil(idx)];
        return val0 + (val1 - val0) * frac;
      }
    },

    mergeData: function(data1, data2, props1, props2 = props1) {
      if (!this.isArray(props1)) props1 = [props1];
      if (!this.isArray(props2)) props2 = [props2];
      if (props1.length != props2.length) {
        console.error('The third and the fourth argument have to be arrays of the same length!');
        return false;
      }

      // Combines two arrays of objects comparing some properties. Only elements found in both arrays
      // will be copied to the result.
      let mergedData = [];
      let notFoundData = [];
      data1.forEach(firstArrayElement => {
        let newEntry = Object.assign({}, firstArrayElement);

        let foundSomething = data2.some(secondArrayElement => {
          let success = true;
          for (let i = 0; i < props1.length; i++) {
            if (firstArrayElement[props1[i]] !== secondArrayElement[props2[i]]) {
              success = false;
            }
          }
          // if elements with same value(s) are found, copy properties from second to first.
          if (success) {
            for (let property in secondArrayElement) {
              if (secondArrayElement.hasOwnProperty(property)) {
                newEntry[property] = secondArrayElement[property];
              }
            }
          }
          return success;
        });

        if (foundSomething) {
          mergedData.push(newEntry);
        } else {
          notFoundData.push(newEntry);
        }
      });

      if (notFoundData.length > 0 ) {
        console.warn("Could not find matches for these entries:")
        console.warn(notFoundData);
      }
      return mergedData;
    },

    intersectData: function(baseData, filterData, prop1, prop2 = prop1) {
      // returns a filtered version of baseData where only elements are kept that are found in filterData
      let newData = [];
      baseData.forEach((baseElement, i) => {
        let takeElement = false;
        filterData.forEach(filterElement => {
          if (baseElement[prop1] === filterElement[prop2]) {
            takeElement = true;
          }
        });
        if (takeElement) newData.push(baseData[i]);
      });
      return newData;
    },

    deleteIncompleteData: function(data, props) {
      if (!this.isArray(props)) props = [props];

      let filteredData = [];
      data.forEach(obj => {
        let propMissing = false;
        props.forEach(prop => {
          if (!obj.hasOwnProperty(prop)) {
            propMissing = true;
          } else {
            if (obj[prop] === undefined || obj[prop] === null || obj[prop] === "") propMissing = true;
          }
        });
        if (!propMissing) filteredData.push(obj);
      });
      return filteredData;
    },

    deleteDuplicateData: function(data, prop, keepFirst = true) {
      let newData = [];
      data.forEach(el => {
        let isNew = true;
        newData.forEach((takenEl, i) => {
          if (takenEl[prop] === el[prop]) {
            isNew = false;
            if (!keepFirst) newData[i] = el;
          }
        });
        if (isNew) newData.push(el);
      });
      return newData;
    },

    deleteDataWithWrongPropType: function(data, prop, allowedType) {
      // other name suggestion: filterPropType()
      // possible Inputs: "Boolean", "Integer", "Number", "String", "Array", "Object"
      let newData = [...data];
      for (let i = 0; i < newData.length; i++) {
        let val = newData[i][prop];
        let keep;
        switch (allowedType) {
          case "Boolean":
            keep = typeof val === "boolean";
            break;
          case "Integer":
            keep = parseInt(val) === val && !isNaN(val);
            break;
          case "Number":
            keep = Number(val) === val && !isNaN(val);
            break;
          case "String":
            keep = this.isString(val);
            break;
          case "Array":
            keep = this.isArray(val);
            break;
          case "Object":
            keep = this.isObject(val);
            break;
          default:
            keep = false;
        }
        if (!keep) {
          newData.splice(i, 1);
          i--;
        }
      }
      return newData;
    },

    convertPropToNumber: function(data, prop, nullNaNs = true) {
      let newData = [...data];
      newData.forEach(obj => {
        let val = obj[prop];
        if (this.isString(val)) {
          val = val.trim()
            .replace(/,/g, '.')
            .replace(/'/g, '')
            .replace(/\s/g, '');
          while (val.indexOf('.') !== val.lastIndexOf('.')) val = val.replace('.', '');
        }
        val = Number(val);
        if (isNaN(val)) val = nullNaNs ? null : obj[prop];
        obj[prop] = val;
      });
      return newData;
    },

    convertPropToBoolean: function(data, prop, strictMode = false) {
      // with strictMode off, all values >=1 are set to true, all others to false
      // generally, everything this function doesn't recognize as true is set to false
      let newData = [...data];
      const trueStrings = ["1", "true", "yes", "+", "wahr", "ja"];
      newData.forEach(obj => {
        let val = obj[prop];
        let bool;
        if (val === true) bool = true;
        else {
          if (this.isString(val)) bool = trueStrings.includes(val.trim().toLowerCase());
          else if (!isNaN(val)) bool = strictMode ? val === 1 : val >= 1;
          else bool = false;
        }
        obj[prop] = bool;
      });
      return newData;
    },

    addPropPercentage: function(data, prop, keyName = prop + "Percentage") {
      let newData = [...data];
      const sum = this.dataSum(newData, prop);
      newData.forEach(obj => {
        obj[keyName] = obj[prop] / sum;
      });
      return newData;
    },

    addPropSegment: function(data, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null) {
      let newData = [...data];
      const range = {
        start: start ? start : this.dataMin(data, prop),
        end: end ? end : this.dataMax(data, prop)
      };
      const segmentSize = Math.abs(range.end - range.start) / segmentCount;
      newData.forEach(obj => {
        obj[keyName] = Math.floor(obj[prop] / segmentSize);
        if (obj[keyName] >= segmentCount) obj[keyName] = segmentCount - 1;
      });
      return newData;
    },

    addPropRank: function(data, prop, keyName = prop + "Rank") {
      let newData = [...data];
      this.sortData(newData, prop);
      let i = 0;
      newData.forEach(obj => {
        if (obj.hasOwnProperty(prop)) {
          obj[keyName] = i;
          i++;
        }
      });
      return newData;
    },

    findAllByValue: function(data, prop, val) {
      return data.filter(obj => {
        return obj[prop] === val;
      });
    },

    findFirstByValue: function(data, prop, val) {
      let arr = this.findAllByValue(data, prop, val);
      return arr.length > 0 ? arr[0] : null;
    },

    dataMax: function(data, prop) {
      // gibt das Maximum der Property *prop* aller Objekte im Array *data* zurück.
      return Math.max.apply(Math, data.map(function(obj) {
        return obj[prop] ? obj[prop] : -Infinity;
      }));
    },

    dataMin: function(data, prop) {
      // gibt das Maximum der Property *prop* aller Objekte im Array *data* zurück.
      return Math.min.apply(Math, data.map(function(obj) {
        return obj[prop] ? obj[prop] : Infinity;
      }))
    },

    dataSum: function(data, prop) {
      //taken from https://stackoverflow.com/a/23247980
      return data.reduce((a, b) => a + (b[prop] || 0), 0);
    },

    dataExtremes: function(data, prop) {
      return {
        "min": this.dataMin(data, prop),
        "max": this.dataMax(data, prop)
      };
    },

    arrayFromProps: function(obj, props, fallbackVal = null) {
      // puts the values of all given properties of an object into an array and returns that array.
      // useful e.g. when data over time is given like the yearly gdp of a country.
      let propArr = [];
      props.forEach(prop => {
        propArr.push(obj.hasOwnProperty(prop) ?
          obj[prop] : fallbackVal);
      });
      return propArr;
    },

    arrayFromPropsInData: function(data, props, propName, deleteProps = true, fallbackVal = null) {
      // does arrayFromProps() for every object inside a given JSON. returns the JSON.
      data.forEach(el => {
        el[propName] = this.arrayFromProps(el, props, fallbackVal);
        if (deleteProps) this.deleteProps(el, props);
      });
      return data;
    },

    deleteProps: function(obj, props) {
      if (!this.isArray(props)) props = [props];
      props.forEach(prop => {
        if (obj.hasOwnProperty(prop)) delete obj[prop];
      });
    },

    deletePropsInData: function(data, props) {
      if (!this.isArray(props)) props = [props];
      data.forEach(el => {
        props.forEach(prop => {
          delete el[prop];
        });
      });
    },

    sortData: function(data, props) {
      // Variation from https://stackoverflow.com/a/4760279
      if (!this.isArray(props)) props = [props];
      return data.sort((a, b) => {
        let result = 0;
        for (let i = 0; i < props.length; i++) {
          let prop = props[i];
          let sortOrder = 1;
          if (prop[0] === "-") {
            sortOrder = -1;
            prop = prop.substr(1);
          }
          result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
          result *= sortOrder;
          if (result != 0) break;
        }
        return result;
      });
    },

    // dynamicSort: function(prop) {
    //   // taken from https://stackoverflow.com/a/4760279
    //   // sorts Array of Object by values of a given property (multiple params possible)
    //   let sortOrder = 1;
    //   if (prop[0] === "-") {
    //     sortOrder = -1;
    //     prop = prop.substr(1);
    //   }
    //   return function(a, b) {
    //     let result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    //     return result * sortOrder;
    //   }
    // },

    // sortJSON: function(arr, props) {
    //   // makes dynamicSort and dynamicSortMultiple easier to use (thus decreasing performance):
    //   if (!this.isArray(props)) props = [props];
    //   return arr.sort(this.dynamicSortMultiple(...props));
    // },

    // dynamicSortMultiple: function() {
    //   let props = arguments;
    //   return function(obj1, obj2) {
    //     let i = 0,
    //       result = 0,
    //       numberOfProperties = props.length;
    //     while (result === 0 && i < numberOfProperties) {
    //       result = utils.dynamicSort(props[i])(obj1, obj2);
    //       i++;
    //     }
    //     return result;
    //   };
    // },

    download: function(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else { // Others
        let a = document.createElement("a"),
          url = URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
    },

    saveData: function(data, pretty = true) {
      let c = JSON.stringify(data);
      if (pretty) c = c.replaceAll('}', '\n}');
      if (pretty) c = c.replaceAll('{', '{\n\t');
      if (pretty) c = c.replaceAll(',"', ',\n\t"');
      const file = new Blob([c], { type: 'text/json' });
      this.download(file, "export.json");
    },

    // Array-related:
    // ===================================

    arraySum: function(arr) {
      //taken from https://stackoverflow.com/a/3762623
      return arr.reduce((pv, cv) => Number(pv) + Number(cv), 0);
    },

    arrayCount: function(array, val) {
      // how often does given value in given array exist?
      return array.filter(item => item === val).length;
    },

    arrayAverage: function(arr, ignoreEmpty = false) {
      if (ignoreEmpty) arr = arr.filter(el => el !== null && el !== undefined && el !== "");
      return this.arraySum(arr) / arr.length;
    },

    arrayLast: function(arr, noEmptyValues = false) {
      let lastVal = null;
      if (noEmptyValues) {
        let i;
        for (i = arr.length - 1; i >= 0; i--)
          if (arr[i] && arr[i] !== "" && arr[i] !== undefined && arr[i] !== null) break;
        lastVal = arr[i];
      } else lastVal = arr.slice(-1)[0];
      return lastVal;
    },

    shuffleArray: function(arr) {
      // taken from https://stackoverflow.com/a/2450976
      let currentIndex = arr.length,
        temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    },

    isArray: function(val) {
      // This way of recognizing an Array seems to be the fastest:
      return Object.prototype.toString.call(val) === '[object Array]';

      // Almost as fast:
      //return val instanceof Array;
    },


    // General helper functions
    // ========================

    isString: function(val) {
      return typeof val === 'string';
    },

    isObject: function(val) {
      return typeof val === 'object' && val !== null;
    },

    clip: function(val, min, max) {
      val = val < min ? min : val;
      val = val > max ? max : val;
      return val;
    },

    map: function(val, low1, high1, low2, high2, clipping = false) {
      // converts a value from one range of values to another
      // clipping disallows val to be outside of low1-high1
      if (clipping) {
        if (val < low1) val = low1;
        if (val > high1) val = high1;
      }
      return (val - low1) / (high1 - low1) * (high2 - low2) + low2;
    },

    random: function(low, high) {
      // returns random value inside a given value range
      if (arguments.length === 0) {
        low = 0;
        high = 1;
      } else if (arguments.length === 1 || high == undefined || high == null) {
        high = low;
        low = 0;
      }
      return Math.random() * (high - low) + low;
    },

    randomInt: function(low, high) {
      if (arguments.length === 0) {
        low = 0;
        high = 1;
      } else if (arguments.length === 1 || high == undefined || high == null) {
        high = low;
        low = 0;
      }
      return Math.floor(this.random(low, high + 1));
    },

    circleRadius: function(area) {
      //returns circle radius of given circle area
      return Math.sqrt(area / Math.PI);
    },

    circleArea: function(r) {
      return Math.PI * r * r;
    },

    radians: function(deg) {
      return deg / 180 * Math.PI;
    },

    degrees: function(rad) {
      return rad / Math.PI * 180;
    },

    lerp: function(val1, val2, time) {
      return val1 + time * (val2 - val1);
    },

    distance: function(x1, y1, x2, y2) {
      return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
    },

    cartesian: function(radius, angle) {
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      };
    },

    polar: function(x, y) {
      return {
        radius: Math.sqrt(x * x + y * y),
        angle: Math.atan2(y, x)
      };
    },

    // DATE FUNCTIONS
    // ==============

    duration: function(date1, date2) {
      return Date.parse(date2) - Date.parse(date1);
    },

  }

})()
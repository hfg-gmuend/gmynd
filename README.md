# G•M•Y•N•D

**A javascript utility library**

This library serves for (students) data visualization projects. It provides some data manipulation functions and other utility functions to make the life of javascript programming a bit easier. It's just a set of convenience functions, not a framework.

### Some remarks about naming functions and arguments

In this context "data" always refers to a JSON representation of a table, which is an array of simple objects like:
```javascript
let superheroes = [ 
  {Name:"A-Bomb", Height:203, Weight:441},
  {Name:"Abe Sapien", Height:191, Weight:65},
  {Name:"Abin Sur", Height:185, Weight:90},
  {Name:"Abomination", Height:203, Weight:441},
  {Name:"Absorbing Man", Height:193, Weight:122},
  ...
]
```
This kind of JSON is usually generated if you convert a CSV-file to JSON. The original CSV of the example above would look like this:
```csv
Name,Height,Weight
A-Bomb,203,441
Abe Sapien,191,65
Abin Sur,185,90
Abomination,203,441
Absorbing Man,193,122
...
```

We will refer to the column titles (e.g. `Name`, `Height`, `Weight`) as properties or props and to the rows as data objects or entries.


---------------------------------
### Reference

#### Data manipulation

- [`sortData(data, props)`](docs/sortData.md)
- [`groupData(data, props)`](docs/groupData.md) -> `object`
- [`cumulateData(data, props, [calculations])`](docs/cumulateData.md) -> `newData`
- [`mergeData(data1, data2, prop1, [prop2])`](docs/mergeData.md) -> `newData`
- [`intersectData(baseData, filterData, prop1, [prop2])`](docs/intersectData.md) -> `newData`
- [`findAllByValue(data, prop, val)`](docs/findAllByValue.md) -> `newData`
- [`findFirstByValue(data, prop, val)`](docs/findFirstByValue.md) -> `object`
- [`deleteIncompleteData(data, props)`](docs/deleteIncompleteData.md) -> `newData`
- [`deleteDuplicateData(data, prop, [keepFirst])`](docs/deleteDuplicateData.md) -> `newData`
- [`deleteDataWithWrongPropType(data, prop, allowedType)`](docs/deleteDataWithWrongPropType.md) -> `newData`
- [`convertPropToNumber(data, prop, [nullNaNs])`](docs/convertPropToNumber.md) -> `newData`
- [`convertPropToBoolean(data, prop, [strictMode])`](docs/convertPropToBoolean.md) -> `newData`
- [`addPropPercentage(data, prop, [propName])`](docs/addPropPercentage.md) -> `newData`
- [`addPropSegment(data, prop, segmentCount, [start], [end], [propName])`](docs/addPropSegment.md)  -> `newData`
- [`addPropRank(data, prop, [propName])`](docs/addPropRank.md) -> `newData`
- [`arrayFromProps(obj, props, [fallbackVal])`](docs/arrayFromProps.md) -> `array`
- [`arrayFromPropsInData(arr, props, propName, [deleteProps], [fallbackVal])`](docs/arrayFromPropsInData.md) -> `newData`
- [`deleteProps(obj, props)`](docs/deleteProps.md)
- [`deletePropsInData(data, props)`](docs/deletePropsInData.md)
- [`dataMin(data, prop)`](docs/dataMin.md) -> `number`
- [`dataMax(data, prop)`](docs/dataMax.md) -> `number`
- [`dataExtremes(data, prop)`](docs/dataExtremes.md) -> `object`
- [`dataSum(data, prop)`](docs/dataSum.md) -> `number`
- [`saveData(data, [filename], [pretty])`](docs/saveData.md)


#### Array helpers

- [`arraySum(arr)`](docs/arraySum.md) -> `number`
- [`arrayCount(arr, val)`](docs/arrayCount.md) -> `number`
- [`arrayAverage(arr, [ignoreEmpty])`](docs/arrayAverage.md) -> `number`
- [`arrayLast(arr, [ignoreEmpty])`](docs/arrayLast.md) -> `someValue`
- [`shuffleArray(arr)`](docs/shuffleArray.md) -> `array`


#### Math and utilities

- [`map(value, low1, high1, low2, high2, [clipping])`](docs/map.md) -> `number`
- [`lerp(value1, value2, t)`](docs/lerp.md) -> `number`
- [`clip(value, min, max)`](docs/clip.md) -> `number`
- [`random(low, high)`](docs/random.md) -> `number`
- [`randomInt(low, high)`](docs/randomInt.md) -> `number`
- [`radians(degree)`](docs/radians.md) -> `number`
- [`degrees(radians)`](docs/degrees.md) -> `number`
- [`distance(x1, y1, x2, y2)`](docs/distance.md) -> `number`
- [`cartesian(radius, angle)`](docs/cartesian.md) -> `object`
- [`polar(x, y)`](docs/polar.md) -> `object`
- [`circleRadius(area)`](docs/circleRadius.md) -> `number`
- [`circleArea(radius)`](docs/circleArea.md) -> `number`
- [`duration(date1, date2)`](docs/duration.md) -> `number`
- [`isString(value)`](docs/isString.md) -> `boolean`
- [`isArray(value)`](docs/isArray.md) -> `boolean`
- [`isObject(value)`](docs/isObject.md) -> `boolean`

---------------------------------

### Acknowledgements

Example data from 

https://www.kaggle.com/dannielr/marvel-superheroes

https://ourworldindata.org/age-structure

https://ourworldindata.org/gender-ratio

---------------------------------

Suggestions? Bugs? File an issue! :)



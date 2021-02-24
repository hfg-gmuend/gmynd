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
- [`groupData(data, props)`](docs/groupData.md)
- [`cumulateData(data, props, calculations = [])`](docs/cumulateData.md)
- [`mergeData(data1, data2, prop1, prop2 = prop1)`](docs/mergeData.md)
- `intersectData(baseData, filterData, prop1, prop2 = prop1)`

- [`findAllByValue(data, prop, val)`](docs/findAllByValue.md)
- [`findFirstByValue(data, prop, val)`](docs/findFirstByValue.md)

- `deleteIncompleteData(data, props)`
- `deleteDuplicateData(data, prop, keepFirst = true)`
- `deleteDataWithWrongPropType(data, prop, allowedType)`

- `convertPropToNumber(data, prop, nullNaNs = true)`
- `convertPropToBoolean(data, prop, strictMode = false)`

- `addPropPercentage(data, prop, keyName = prop + "Percentage")`
- `addPropSegment(data, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null)`
- `addPropRank(data, prop, keyName = prop + "Rank")`
- `arrayFromProps(obj, props, fallbackVal = null)`
- `arrayFromPropsInData(arr, props, propName, deleteProps = true, fallbackVal = null)`
- `deleteProps(obj, props)`
- `deletePropsInData(arr, props)`

- `dataMax(arr, prop)`
- `dataMin(arr, prop)`
- `dataSum(arr, prop)`
- `dataExtremes(arr, prop)`

- `saveData(arr, pretty = true)`


#### Array helpers

- `arraySum(arr)`
- `arrayCount(array, val)`
- `arrayAverage(arr, ignoreEmpty = false)`
- `arrayLast(arr, noEmptyValues = false)`
- `shuffleArray(arr)`


#### Math and utilities

- [`map(value, low1, high1, low2, high2, clipping=false)`](docs/map.md)
- [`lerp(value1, value2, t)`](docs/lerp.md)
- [`clip(val, min, max)`](docs/clip.md)
- [`random(low, high)`](docs/random.md)
- [`randomInt(low, high)`](docs/randomInt.md)
- [`radians(deg)`](docs/radians.md)
- [`degrees(rad)`](docs/degrees.md)
- [`distance(x1, y1, x2, y2)`](docs/distance.md)
- [`cartesian(radius, angle)`](docs/cartesian.md)
- [`polar(x, y)`](docs/polar.md)
- [`circleRadius(area)`](docs/circleRadius.md)
- [`circleArea(radius)`](docs/circleArea.md)
- `getDuration(date1, date2)`

- [`isString(value)`](docs/isString.md)
- `isArray(val)`
- `isObject(val)`

---------------------------------
Suggestions? Bugs? File an issue! :)



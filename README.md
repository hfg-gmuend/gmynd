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
- [`groupData(data, props) -> newObject`](docs/groupData.md)
- [`cumulateData(data, props, calculations = []) -> newData`](docs/cumulateData.md)
- [`mergeData(data1, data2, prop1, prop2 = prop1) -> newData`](docs/mergeData.md)
- `intersectData(baseData, filterData, prop1, prop2 = prop1) -> newData`
- [`findAllByValue(data, prop, val) -> newData`](docs/findAllByValue.md)
- [`findFirstByValue(data, prop, val) -> object`](docs/findFirstByValue.md)
- [`deleteIncompleteData(data, props) -> newData`](docs/deleteIncompleteData.md)
- `deleteDuplicateData(data, prop, keepFirst = true) -> newData`
- `deleteDataWithWrongPropType(data, prop, allowedType) -> newData`
- `convertPropToNumber(data, prop, nullNaNs = true) -> newData`
- `convertPropToBoolean(data, prop, strictMode = false) -> newData`
- `addPropPercentage(data, prop, keyName = prop + "Percentage") -> newData`
- `addPropSegment(data, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null) -> newData`
- `addPropRank(data, prop, keyName = prop + "Rank") -> newData`
- `arrayFromProps(obj, props, fallbackVal = null)`
- `arrayFromPropsInData(arr, props, propName, deleteProps = true, fallbackVal = null)`
- `deleteProps(obj, props)`
- `deletePropsInData(data, props)`
- [`dataMin(data, prop) -> number`](docs/dataMin.md)
- [`dataMax(data, prop) -> number`](docs/dataMax.md)
- [`dataExtremes(data, prop) -> object`](docs/dataExtremes.md)
- `dataSum(data, prop) -> number`
- `saveData(data, pretty = true)`


#### Array helpers

- `number     = arraySum(arr) -> number`
- `number     = arrayCount(array, val) -> number`
- `number     = arrayAverage(arr, ignoreEmpty = false) -> number`
- `someValue  = arrayLast(arr, noEmptyValues = false) -> someValue`
- `shuffleArray(arr)`


#### Math and utilities

- [`map(value, low1, high1, low2, high2, clipping=false) -> number`](docs/map.md)
- [`lerp(value1, value2, t) -> number`](docs/lerp.md)
- [`clip(value, min, max) -> number`](docs/clip.md)
- [`random(low, high) -> number`](docs/random.md)
- [`randomInt(low, high) -> number`](docs/randomInt.md)
- [`radians(degree) -> number`](docs/radians.md)
- [`degrees(radians) -> number`](docs/degrees.md)
- [`distance(x1, y1, x2, y2) -> number`](docs/distance.md)
- [`cartesian(radius, angle) -> object`](docs/cartesian.md)
- [`polar(x, y) -> object`](docs/polar.md)
- [`circleRadius(area) -> number`](docs/circleRadius.md)
- [`circleArea(radius) -> number`](docs/circleArea.md)
- `getDuration(date1, date2) -> number`
- [`isString(value) -> boolean`](docs/isString.md)
- [`isArray(value) -> boolean`](docs/isArray.md)
- [`isObject(value) -> boolean`](docs/isObject.md)

---------------------------------
Suggestions? Bugs? File an issue! :)



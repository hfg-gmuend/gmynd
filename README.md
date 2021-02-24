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
- [`newObject  = groupData(data, props)`](docs/groupData.md)
- [`newData    = cumulateData(data, props, calculations = [])`](docs/cumulateData.md)
- [`newData    = mergeData(data1, data2, prop1, prop2 = prop1)`](docs/mergeData.md)
- `newData    = intersectData(baseData, filterData, prop1, prop2 = prop1)`
- [`newData    = findAllByValue(data, prop, val)`](docs/findAllByValue.md)
- [`object     = findFirstByValue(data, prop, val)`](docs/findFirstByValue.md)
- `newData    = deleteIncompleteData(data, props)`
- `newData    = deleteDuplicateData(data, prop, keepFirst = true)`
- `newData    = deleteDataWithWrongPropType(data, prop, allowedType)`
- `newData    = convertPropToNumber(data, prop, nullNaNs = true)`
- `newData    = convertPropToBoolean(data, prop, strictMode = false)`
- `newData    = addPropPercentage(data, prop, keyName = prop + "Percentage")`
- `newData    = addPropSegment(data, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null)`
- `newData    = addPropRank(data, prop, keyName = prop + "Rank")`
- `arrayFromProps(obj, props, fallbackVal = null)`
- `arrayFromPropsInData(arr, props, propName, deleteProps = true, fallbackVal = null)`
- `deleteProps(obj, props)`
- `deletePropsInData(arr, props)`
- `number     = dataMax(arr, prop)`
- `number     = dataMin(arr, prop)`
- `number     = dataSum(arr, prop)`
- `object     = dataExtremes(arr, prop)`
- `saveData(arr, pretty = true)`


#### Array helpers

- `number     = arraySum(arr)`
- `number     = arrayCount(array, val)`
- `number     = arrayAverage(arr, ignoreEmpty = false)`
- `someValue  = arrayLast(arr, noEmptyValues = false)`
- `shuffleArray(arr)`


#### Math and utilities

- [`number     = map(value, low1, high1, low2, high2, clipping=false)`](docs/map.md)
- [`number     = lerp(value1, value2, t)`](docs/lerp.md)
- [`number     = clip(val, min, max)`](docs/clip.md)
- [`number     = random(low, high)`](docs/random.md)
- [`number     = randomInt(low, high)`](docs/randomInt.md)
- [`number     = radians(deg)`](docs/radians.md)
- [`number     = degrees(rad)`](docs/degrees.md)
- [`number     = distance(x1, y1, x2, y2)`](docs/distance.md)
- [`object     = cartesian(radius, angle)`](docs/cartesian.md)
- [`object     = polar(x, y)`](docs/polar.md)
- [`number     = circleRadius(area)`](docs/circleRadius.md)
- [`number     = circleArea(radius)`](docs/circleArea.md)
- `number     = getDuration(date1, date2)`
- [`boolean    = isString(value)`](docs/isString.md)
- `boolean    = isArray(val)`
- `boolean    = isObject(val)`

---------------------------------
Suggestions? Bugs? File an issue! :)



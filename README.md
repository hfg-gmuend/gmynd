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
- [`intersectData(baseData, filterData, prop1, prop2 = prop1)`](docs/intersectData.md)
- [`findAllByValue(data, prop, val)`](docs/findAllByValue.md)
- [`findFirstByValue(data, prop, val)`](docs/findAllByValue.md)

#### Array helpers

TODO

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
- [`isString(value)`](docs/isString.md)

---------------------------------
Suggestions? Bugs? File an issue! :)


sortData:                   -> sortData      
groupData:                  -> groupData     
cumulateData:               -> cumulateData  
mergeData:                  -> mergeData    
intersectData:              -> intersectData

filterRequiredProps:        -> deleteIncompleteData
deleteDoublettes:           -> deleteDuplicateData

getPropertyPercentages:     -> addPropPercentage
getPropertySegments:        -> addPropSegment
getPropertyRank:            -> addPropRanks

getObjByKeyVal:             -> findAllByValue
getFirstObjByKeyVal:        -> findFirstByValue

getPropertyMax:             -> dataMax
getPropertyMin:             -> dataMin
getExtremes:                -> dataExtremes
getPropertySum:             -> dataSum

arrayFromProps:             -> arrayFromProps
batchArrayFromProps:        -> arrayFromPropsInData
deleteProps:                -> deleteProps
batchDeleteProps:           -> deletePropsInData

exportJSON:                 -> saveData
download:                   -> download   (nicht dokumentiert)

arraySum:                   -> arraySum
countInArray:               -> arrayCount
arrayAverage:               -> arrayAverage
lastOfArray:                -> arrayLast
shuffleArray:               -> shuffleArray

isArray:                    -> isArray 
isString:                   -> isString

map:                        -> map
random:                     -> random   
randomInt:                  -> randomInt
lerp:                       -> lerp     
distance:                   -> distance 

radians:                    -> radians  
degrees:                    -> degrees  
polarToCartesian:           -> cartesian
cartesianToPolar:           -> polar
getRadiusByArea:            -> circleRadius
getAreaByRadius:            -> circleArea

getDuration:                -> duration


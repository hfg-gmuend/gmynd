# G•M•Y•N•D

**A javascript utility library**


---------------------------------
### Reference

#### Data manipulation
In this context "data" always refers to a JSON representation of a table, which is an array
of objects like `[{Gender:'F', Age:32}, {Gender:'M', Age:73}, ...]`.

- [`groupData(data, props)`](docs/groupData.md)
- [`cumulateData(data, props, calculations = [])`](docs/cumulateData.md)
- [`mergeData(data1, data2, prop1, prop2 = prop1)`](docs/mergeData.md)
- [`intersectData(baseArr, filterArr, prop1, prop2 = prop1)`](docs/intersectData.md)
- [`sortData(data, props)`](docs/sortData.md)


#### Array helpers
TODO

#### Math and utilities
- [`map(value, low1, high1, low2, high2, clipping=false)`](docs/map.md)
- [`lerp(value1, value2, t)`](docs/lerp.md)
- [`random(low, high)`](docs/random.md)
- [`randomInt(low, high)`](docs/randomInt.md)
- [`radians(deg)`](docs/radians.md)
- [`degrees(rad)`](docs/degrees.md)
- [`distance(x1, y1, x2, y2)`](docs/distance.md)
- [`polarToCartesian(radius, angle)`](docs/polarToCartesian.md)
- [`cartesianToPolar(x, y)`](docs/cartesianToPolar.md)
- [`getRadiusByArea(area)`](docs/getRadiusByArea.md)
- [`getAreaByRadius(radius)`](docs/getAreaByRadius.md)
- [`isString(value)`](docs/isString.md)

---------------------------------
Suggestions? Bugs? File an issue! :)




    groupData(arr, props)
    cumulateData(arr, props, calculations = [])
    mergeData(arr1, arr2, key1, key2 = key1)
    intersectData(baseArr, filterArr, key1, key2 = key1)
    filterRequiredProps(arr, props)
    deleteDoublettes(arr, key, keepFirst = true)
    getPropertyPercentages(arr, prop, keyName = prop + "Percentage")
    getPropertySegments(arr, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null)
    getPropertyRank(arr, prop, keyName = prop + "Rank")
    getObjByKeyVal(set, key, val)
    getFirstObjByKeyVal(set, key, val)
    getPropertyMax(arr, prop)
    getPropertyMin(arr, prop)
    getPropertySum(arr, prop)
    getExtremes(arr, prop)
    arrayFromProps(obj, props, fallbackVal = null)
    batchArrayFromProps(arr, props, propName, deleteProps = true, fallbackVal = null)
    deleteProps(obj, props)
    batchDeleteProps(arr, props)
    dynamicSort(prop)
    sortJSON(arr, props)
    dynamicSortMultiple()
    download(blob, filename)
    exportJSON(arr, pretty = true)
    arraySum(arr)
    countInArray(array, val)
    arrayAverage(arr, ignoreEmpty = false)
    lastOfArray(arr, noEmptyValues = false)
    shuffleArray(arr)
    isArray(val)
    getDuration(date1, date2)
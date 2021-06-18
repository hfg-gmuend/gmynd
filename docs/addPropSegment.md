[Back to reference](../README.md)

### `addPropSegment(data, prop, segmentCount, start = null, end = null, propName = prop + "SegmentOf" + segmentCount)`

Separates the range of numeric values of a given property `prop` of `data` objects into a given count of range
segments (`segmentCount`). Each object in `data` is assigned to one of these segments. The number of that segment is
stored as a new property `propName` in the `data` object.

Each segment covers an equally large range of values. The segments do _not_ cover an equally large number of objects
inside them. That means: If the data objects' property values are not evenly distributed among the value range, there
will be some segments with many objects and other segments with fewer corresponding objects. This function doesn't care
about how many objects belong to each segment. Nonetheless, if you want to avoid that extreme values of some data
objects makes the division into segments rather useless, you can set `start` and `end` as optional arguments of the
function. This basically clips all values to the given value range before assigning them to a segment number.

### Examples:

#### Example 1:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Steppenwolf", Height: 183},
  {Name: "Storm", Height: 180},
  {Name: "Sunspot", Height: 173},
  {Name: "Superboy", Height: 170},
  {Name: "Superboy-Prime", Height: 180},
  {Name: "Supergirl", Height: 165},
  {Name: "Superman", Height: 191}
]
```

This assigns each object in `data` to one of `3` segments and stores the segment number (`0` to `2`) as a new
property `"HeightSegmentOf3"` in each object:

```javascript
let segmentedSuperheroes = gmynd.addPropSegment(superheroes, "Height", 3);
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Height: 183, HeightSegmentOf3: 2},
  {Name: "Storm", Height: 180, HeightSegmentOf3: 1},
  {Name: "Sunspot", Height: 173, HeightSegmentOf3: 0},
  {Name: "Superboy", Height: 170, HeightSegmentOf3: 0},
  {Name: "Superboy-Prime", Height: 180, HeightSegmentOf3: 1},
  {Name: "Supergirl", Height: 165, HeightSegmentOf3: 0},
  {Name: "Superman", Height: 191, HeightSegmentOf3: 2}
]
```

#### Example 2:

If you add a very tall hero:

```javascript
let superheroes = [
  {Name: "Steppenwolf", Height: 183},
  // [...]
  {Name: "Superman", Height: 191},
  {Name: "Galactus", Height: 876}
]
```

Then the same operation as above would lead to the following result:

```javascript
[
  {Name: "Steppenwolf", Height: 183, HeightSegmentOf3: 0},
  // all others also in segment 0
  {Name: "Superman", Height: 191, HeightSegmentOf3: 0},
  {Name: "Galactus", Height: 876, HeightSegmentOf3: 2}
]
```

We need to set the value range for the `"Height"` in order to avoid that the extreme value for `"Galactus"` makes any
segmentation useless. For the minimum value (`start`) we choose `null`, so the smallest `"Height"` value
in `superheroes` is taken. The maximum (`end`) is set to `200`:

```javascript
let segmentedSuperheroes = gmynd.addPropSegment(superheroes, "Height", 3, null, 200);
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Height: 183, HeightSegmentOf3: 1},
  {Name: "Storm", Height: 180, HeightSegmentOf3: 1},
  {Name: "Sunspot", Height: 173, HeightSegmentOf3: 0},
  {Name: "Superboy", Height: 170, HeightSegmentOf3: 0},
  {Name: "Superboy-Prime", Height: 180, HeightSegmentOf3: 1},
  {Name: "Supergirl", Height: 165, HeightSegmentOf3: 0},
  {Name: "Superman", Height: 191, HeightSegmentOf3: 2},
  {Name: "Galactus", Height: 876, HeightSegmentOf3: 2}
]
```
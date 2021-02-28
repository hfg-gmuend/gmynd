[Back to reference](../README.md)

### `convertPropToNumber(data, prop, nullNaNs = true)`

Converts every value of a given property `prop` in every object in `data` to a numeric value and returns a copy
of `data` where the original values are overwritten with the new values. If `nullNaNs` is set to `true` (default
value), every value which cannot be cast as a number is set to `null`. If `nullNaNs` is set to `false`, the original
value is kept in these cases.

This function is useful, for example, if you encounter problems when converting from CSV to JSON, such as thousands
separators in numeric values resulting in string values in the data objects instead of numbers.

### Examples:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Steppenwolf", Weight: "91"},
  {Name: "Storm", Weight: "57,8"},
  {Name: "Sunspot", Weight: "77.7"},
  {Name: "Superboy", Weight: 68.3},
  {Name: "Superboy-Prime", Weight: [77, 99]},
  {Name: "Supergirl", Weight: "unknown"},
  {Name: "T-Rex", Weight: "15,555.5"},
  {Name: "Elephant Guy", Weight: "3 011,2"}
]
```

#### Example 1:

This will convert every `Weight` value to a `Number`, setting the `Weight` to `null` where a conversion is impossible:

```javascript
let superheroes = gmynd.convertPropToNumber(superheroes, "Weight");
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Weight: 91},
  {Name: "Storm", Weight: 57.8},
  {Name: "Sunspot", Weight: 77.7},
  {Name: "Superboy", Weight: 68.3},
  {Name: "Superboy-Prime", Weight: null},
  {Name: "Supergirl", Weight: null},
  {Name: "T-Rex", Weight: 15555.5},
  {Name: "Elephant Guy", Weight: 3011.2}
]
```

#### Example 2:

This does the same, but keeps the original value for every property value that cannot be properly converted:

```javascript
let superheroes = gmynd.convertPropToNumber(superheroes, "Weight", false);
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Weight: 91},
  {Name: "Storm", Weight: 57.8},
  {Name: "Sunspot", Weight: 77.7},
  {Name: "Superboy", Weight: 68.3},
  {Name: "Superboy-Prime", Weight: [77, 99]},
  {Name: "Supergirl", Weight: "unknown"},
  {Name: "T-Rex", Weight: 15555.5},
  {Name: "Elephant Guy", Weight: 3011.2}
]
```
[Back to reference](../README.md)

### `filterPropType(data, prop, allowedType)`

Filters all objects in `data` by checking if the value of a given property `prop` in each element is of the correct data
type. `allowedType` works with any string from the following list (case-insensitive):

```
"Boolean", "Integer", "Number", "String", "Array", "Object"
```

Returns an array with only those objects who have all required properties with the correct data type. This function is
useful to get rid of "dead" data elements that cannot be displayed or used properly.

### Example:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Steppenwolf", Weight: "91"},
  {Name: "Storm", Weight: "57,8"},
  {Name: "Sunspot", Weight: 77},
  {Name: "Superboy", Weight: 68.3},
  {Name: "Superboy-Prime", Weight: [77, 99]},
  {Name: "Supergirl", Weight: "unknown"},
]
```

This finds and returns all elements in `superheroes` whose `Weight` has the data type `number`:

```javascript
let filteredHeroes = gmynd.filterPropType(superheroes, "Weight", "Number");
```

This is the result:

```javascript
[
  {Name: "Sunspot", Weight: 77},
  {Name: "Superboy", Weight: 68.3},
]
```

**Note:** `77` is an Integer and all Integers are Numbers.

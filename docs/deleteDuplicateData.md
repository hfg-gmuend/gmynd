[Back to reference](../README.md)

### `deleteDuplicateData(data, prop, keepFirst = true)`

Filters the objects in `data` for unique values of a given property `prop` and returns these objects in a new array. If
`keepFirst` is set to `true` (default value), the first element with a specific value for the given property is kept,
other objects with the same property value are discarded. If `keepFirst` is set to `false`, the last element with the
specific property value is kept.

### Examples:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57},
  {Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54},
  {Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101},
  {Name: "Storm", Height: 181, Weight: 56}
]
```

#### Example 1:

This deletes all objects in `superheroes` that have the same `Name`, keeping only the first occurring object:

```javascript
let superheroes = gmynd.deleteDuplicateData(superheroes, "Name");
```

This is the result:

```javascript
[
  {Name: "Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57},
  {Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54},
  {Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101},
]
```

There were 2 objects with the `Name` `"Storm"`, the second one was deleted.

#### Example 2:

This does the same as Example 1, but keeps the last Element:

```javascript
let superheroes = gmynd.deleteDuplicateData(superheroes, "Name", false);
```

This is the result:

```javascript
[
  {Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54},
  {Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101},
  {Name: "Storm", Height: 181, Weight: 56}
]
```
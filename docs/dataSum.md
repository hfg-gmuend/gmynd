[Back to reference](../README.md)

### `dataSum(data, prop)`

Calculates the sum of values of a given property `prop` from all entries in `data`.

#### Example:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Superboy", Height: 170, Weight: 68},
  {Name: "Supergirl", Height: 165, Weight: 54},
  {Name: "Superman", Height: 191, Weight: 101}
]
```

This will sum up the `Height` values of all entries in `superheroes`:

```javascript
let heightSum = gmynd.dataSum(superheroes, "Height");

// 170 + 165 + 191 = 526
```

Credits: [bottens](https://stackoverflow.com/a/23247980)
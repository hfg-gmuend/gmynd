[Back to reference](../README.md)

### `arrayCount(arr, val)`

Counts how often `val` is contained in `arr`.

#### Example 1:

This counts all `3`s in `randomNumbers`:
```javascript
let randomNumbers = [1, 3, 3, 7];
let count = gmynd.arrayCount(randomNumbers, 3);

// count: 2
```

#### Example 2:

This works with any type of data – this counts all `"Math"`s in `timeTable`:
```javascript
let timeTable = ["Philosophy", "Math", "Math", "English", "History", "Physics"];
let count = gmynd.arrayCount(timeTable, "Math");

// count: 2
```
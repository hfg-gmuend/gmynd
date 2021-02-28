[Back to reference](../README.md)

### `arrayLast(arr, ignoreEmpty = false)`

Returns the last element of an array `arr`. if `ignoreEmpty` is set to `false` (default value), the last element in the
array can be `null`, `undefined` or `""`. If `ignoreEmpty` is set to `true`, it returns the last element in the array
that is _not_ `null`, `undefined` or `""`.

### Example:

If you have an array like this:

```javascript
const someNumbers = [1, 2, 3, 4, 5, null];
```
This will return the last element in `someNumbers`, which is `null` in this case:

```javascript
let last = gmynd.arrayLast(someNumbers);

// null
```

Whereas this will return the last element in `someNumbers`, which is not "empty" (`5` in this case):

```javascript
let last = gmynd.arrayLast(someNumbers, true);

// 5
```

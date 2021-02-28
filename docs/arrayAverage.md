[Back to reference](../README.md)

### `arrayAverage(arr, ignoreEmpty = false)`

Calculates the average value of all elements in an array of numbers `arr`. If the optional argument `ignoreEmpty` is set
to `false` (standard value), invalid numerical values in the array are regarded as `0`. If `ignoreEmpty` is set to `true`, the
average is calculated only among all valid numerical values.

**Note:** Valid numerical values are all values that can be cast to a `Number`. E.g. the array `[1, 2]` is invalid while the string `"2"` is valid.

### Examples:
#### Example 1:
If you have an array like this:
```javascript
const someNumbers = [1, 2, 3, 4, 5];
```

This will calculate the average values of `someNumbers`, which is `3`:
```javascript
let average = gmynd.arrayAverage(someNumbers);

// 3
```

#### Example 2:
Let's assume you have a slightly different array like this one:

```javascript
const someNumbers = [1, 2, 3, 4, 5, null];
```

This will calculate the average value of `someNumbers`, ignoring the value `null` in the array:
```javascript
let average = gmynd.arrayAverage(someNumbers, true);

// 3
```

If you want this `null` value to be calculated into the average value as a `0`, just do this:
```javascript
let average = gmynd.arrayAverage(someNumbers);

// 2.5
```
**Note:** In this case you could also write:
```javascript
let average = gmynd.arrayAverage(someNumbers, false);
```
This leads to the same result as `ignoreEmpty` is already set to `false` by default. 

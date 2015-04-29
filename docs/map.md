[Back to reference](../README.md)

##### `map(value, low1, high1, low2, high2)`
Returns the given `value` mapped from range 1 (`low1` to `high1`) to the range 2 (`low2` to `high2`). Note that the values `high1` or `high2` doesn't necessarily have to be higher than the values given by `low1` or `low2`.

Example:

Map the value in the variable n from the range 1 to 3 into the range 0 to -10. The result in `mappedValue` will be `5`.
```javascript
var n = 2;
var mappedValue = map(n, 1, 3, 0, -10);
```


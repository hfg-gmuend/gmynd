[Back to reference](../README.md)

##### `map(value, low1, high1, low2, high2, clipping=false)`
Returns the given `value` mapped from the first range (`low1` to `high1`) to the second range (`low2` to `high2`). Note that the values `high1` or `high2` doesn't necessarily have to be higher than the values given by `low1` or `low2`. `clipping` set to true disallows `value` to be outside of the range `low1` - `high1`. 

Examples:

```javascript
// Map the value in the variable n from the range 1 to 3 into the range 0 to -10
var n = 2;
var mappedValue = map(n, 1, 3, 0, -10);
// mappedValue will be -5
```

```javascript
// Map with clipping
var n = 100;
var mappedValue = map(n, 10, 20, 0, 255, true);
// mappedValue will be 255
```

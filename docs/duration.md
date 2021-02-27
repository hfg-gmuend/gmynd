[Back to reference](../README.md)

### `duration(date1, date2)`

Returns the timespan between two `Date` objects (in milliseconds). Returns a negative value, if `date2` is earlier
than `date1`. Use [`Math.abs()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) if you exclusively want positive results.

#### Example:

If you have two `Dates` like this:

```javascript
const start = new Date(1939, 8, 1);
const end = new Date(1945, 8, 2);
```

This will calculate the timespan between these two dates and give back the result in milliseconds:

```javascript
let duration = gmynd.duration(start, end);

// returns: 189468000000
```
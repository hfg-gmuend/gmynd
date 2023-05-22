[Back to reference](../README.md)

### `range(stop)` or `range(start, stop, step=1)`

Implementation of the Python range function. Returns an array with numbers starting at `start` and going to the last possible value lower than `stop`. 

if `start` is not supplied, it begins with `0`.

if `step` is not supplied, it defaults to `1`. `step` might also be negative, but then `start` must be higher than `stop`.

#### Examples:

```javascript
let myRange = gmynd.range(10);
// myRange will be [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```javascript
let myRange = gmynd.range(5, 2, -0.5);
// myRange will be [5, 4.5, 4, 3.5, 3, 2.5]
```

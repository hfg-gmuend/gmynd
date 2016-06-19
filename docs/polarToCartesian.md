[Back to reference](../README.md)

##### `polarToCartesian(radius, angle)`
Converts a polar coordinate given with `radius` and an `angle` in radians to a cartesian coordinate (x and y).

Returns:
An object `{ x: resultX, y: resultY }`.

Example:

The result in `cartesianCoordinate` will be `{ x: 86.60254037844388, y: 50 }`.
```javascript
var cartesianCoordinate = polarToCartesian(100, radians(30));
```


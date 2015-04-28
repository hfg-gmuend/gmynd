[Back to reference](../README.md)

##### `hsl(hue, saturation, lightness, alpha)` 
Returns a string representing the given hsl color. This string could be used for any color attribute.

Arguments:
- `hue`: A number between 0 and 360.
- `saturation`: A number between 0 and 1.
- `lightness`: A number between 0 and 1.
- `alpha` (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a light blue circle.
```javascript
var col = hsl(200, 1, 0.8);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```


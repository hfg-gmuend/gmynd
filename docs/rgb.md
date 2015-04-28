[Back to reference](../README.md)

##### `rgb(red, green, blue, alpha)` 
Returns a string representing the given rgb color. This string could be used for any color attribute.

Arguments:
- `red`: A number between 0 and 255.
- `green`: A number between 0 and 255.
- `blue`: A number between 0 and 255.
- `alpha` (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a semi-transparent orange circle.
```javascript
var col = rgb(240, 175, 30, 0.5);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```

[Back to reference](../README.md)

##### `gray(grayValue, alpha)`
Returns a string representing the given gray color. This string could be used for any color attribute.

Arguments:
- `grayValue`: A number between 0 and 255.
- `alpha` (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a circle and sets the color to a middle gray.
```javascript
var col = gray(128);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```

See examples:
- [6_set_attributes.html](../examples/1_nodes/6_set_attributes.html)

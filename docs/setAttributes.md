[Back to reference](../README.md)

##### `setAttributes(element, attributes)` 
Sets the attributes of a given element.

Arguments:
- `element`: The element whose attributes are to be set or changed.
- `attributes`: An object giving the attribute names and values, e.g. `{x:200, y:200}`

Returns:
- The given element.

Example:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var elem = createNode('rect', {width:100, height:100});
setAttributes(elem, {transform:'rotate(30)'});
```



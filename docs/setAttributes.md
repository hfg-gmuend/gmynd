[Back to reference](../README.md)

##### `setAttributes(element, attributes)` 
Sets the attributes of a given element.

Arguments:
- `element`: The element whose attributes are to be set or changed.
- `attributes`: An object giving the attribute names and values, e.g. `{x:200, y:200}`

Returns:
- The given element.

Example:

The following script creates a rect and sets some attributes afterwards. 
```javascript
var elem = createNode("rect", {x:200, y:200, width:200, height:200});
setAttributes(elem, {transform:"rotate(15, 300, 300)"});
setAttributes(elem, {'stroke-width':10, stroke:gray(128)});

```

See examples:
- [6_set_attributes.html](../examples/1_nodes/6_set_attributes.html)


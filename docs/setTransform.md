[Back to reference](../README.md)

##### `setTransform(element, transforms)` 
Replace all transforms on an object with new transforms.

Arguments:
- `element`: The element whose transforms are to be set or changed.
- `transforms`: An object, an array of objects or a string, e.g. `'translate(100 50) rotate(30)'` or `[{type:'translate', values:[100, 50]}, {type:'rotate', values:[30]}]`.

Returns:
- The new transforms of the element as an array of objects.

Example:

The following script creates a rect and sets some transforms. 
```javascript
var elem = createNode('rect', {width:100, height:100});
setTransform(elem, 'translate(40 70) rotate(30)');
```
or
```javascript
var elem = createNode('rect', {width:100, height:100});
setTransform(elem, [{type:'translate', values:[40, 70]}, {type:'rotate', values:[30]}]);
```
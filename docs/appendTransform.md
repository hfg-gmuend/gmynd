[Back to reference](../README.md)

##### `appendTransform(element, transforms)` 
Add one or more transforms to an object that already has transforms.

Arguments:
- `element`: The element where the transforms should be appended.
- `transforms`: An object, an array of objects or a string, e.g. `'translate(100 50) rotate(30)'` or `[{type:'rotate', values:[30]}, {type:'translate', values:[100, 50]}]`.

Returns:
- The new transforms of the element as an array of objects.

Example:

The following script creates a rect and appends a transform. 
```javascript
var elem = createNode('rect', {width:100, height:100, transform:'translate(40 70)'});
appendTransform(elem, 'rotate(30)');
```
or
```javascript
var elem = createNode('rect', {width:100, height:100, transform:'translate(40 70)'});
appendTransform(elem, {type:'rotate', values:[30]});
```

See examples:
- [1_append_transform.html](../examples/2_transforms/1_append_transform.html)
- [2_append_transform.html](../examples/2_transforms/2_append_transform.html)
- [3_animate_grid.html](../examples/3_animation/1_animate_grid.html)

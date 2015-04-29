[Back to reference](../README.md)

##### `clearTransform(element)` 
Removes all transforms from an element.

Arguments:
- `element`: The element from where the transforms should be removed.

Returns:
- The transforms of the element that has been removed as an array of objects.

Example:

The following script creates a rect and afterwards removes all transforms. 
```javascript
var elem = createNode('rect', {width:100, height:100, transform:'translate(40 70)'});
clearTransform(elem);
```

See examples:
- [3_animate_grid.html](../examples/3_animation/1_animate_grid.html)

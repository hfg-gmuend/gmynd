[Back to reference](../README.md)

##### `replaceTransform(element, transform, index)` 
Replaces one transform command of the same kind (e.g. rotate). If there is no such transform it will be appended. If there is more than one command of the same kind it will replace the first or the one specified by index.


Arguments:
- `element`: The element where the transforms should be appended.
- `transform`: An object or a string, e.g. `'translate(100 50)'` or `{type:'rotate', values:[30]}`.
- `index` (optional): The index of the occurance that should be replaced (0 = first occurance).

Returns:
- The new transforms of the element as an array of objects.

Example:

The following script creates a rect and appends a transform. 
```javascript
var myRect = createNode('rect', {
				x:0, 
				y:0, 
				width:100, 
				height:100, 
				transform:"translate(300, 300) rotate(20) scale(1.2 0.8) rotate(10)"
});
replaceTransform(myRect, 'rotate(45)');
```
or
```javascript
var myRect = createNode('rect', {
				x:0, 
				y:0, 
				width:100, 
				height:100, 
				transform:"translate(300, 300) rotate(20) scale(1.2 0.8) rotate(10)"
});
replaceTransform(myRect, {type:'rotate', values:[30]});
```

See examples:
- [3_replace_transform.html](../examples/2_transforms/3_replace_transform.html)

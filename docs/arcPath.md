[Back to reference](../README.md)

##### `arcPath(radius, startAngle, endAngle)` 
Creates an arc with a specific `radius` from `startAngle` to `endAngle`, both in radians.

Returns:
A string that could directly been used as a value for the `d` attribute of a path element.

Example:

The following script creates an arc with radius 70 from 30 to 80 degrees. 
```javascript
createNode('path', {
				d: arcPath( 70, radians(30), radians(80) ),
				stroke: '#000',
				'stroke-width': 40,
				transform: 'translate(300 300)'
})
```

See examples:
- [1_arc_animation.html](../examples/5_special_shapes/1_arc_animation.html)

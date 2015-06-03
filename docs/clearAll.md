[Back to reference](../README.md)

##### `clearAll()`
Removes all elements from the SVG. It will not remove defs and everything inside the defs.

Arguments:
none

Returns:
An array of all elements that have been removed.

Example:

The following will create a new group and a circle. The group is automatically added to the SVG, the circle is added to the group by using the `appendChild()` function.
```javascript
var myAnimationFunction = function(f) {
  clearAll();

  var xpos = 50;
  while (xpos <= 550) {
    var ypos = Math.sin(f/20 + xpos) * 200 + 300;
    var myCircle = createNode('circle', {cx:xpos, cy:ypos, r:20});
    xpos = xpos + 50;
  }
}

animate(myAnimationFunction);
```

See examples:
- [2_animate_row_clearAll.html](../examples/3_animation/2_animate_row_clearAll.html)

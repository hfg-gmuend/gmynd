[Back to reference](../README.md)

##### `animate(function, fps)` 
This function provides an easy way for frame based animation.

Arguments:
- `function`: The function, that will be executed every frame.
- `fps` (optional): Frames per second as a number. Default is 60.

Example:

This example creates a circle and moves it from left to right.
```javascript
var myCircle = createNode('circle', {cx:0, cy:300, r:20});

var myAnimationFunction = function(currentFrameNumber) {
  myCircle.setAttribute('cx', currentFrameNumber);
}

animate(myAnimationFunction);
```

See examples:
- [1_animate_circle_basic.html](../examples/3_animation/1_animate_circle_basic.html)
- [2_animate_row_clearAll.html](../examples/3_animation/1_animate_row_clearAll.html)
- [3_animate_grid.html](../examples/3_animation/1_animate_grid.html)

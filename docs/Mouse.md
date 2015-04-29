[Back to reference](../README.md)

#### `Mouse` 
The `Mouse` object provides information about the mouse position and which mouse button is pressed.

- `Mouse.x`: X coordinate of the mouse relative to the upper left corner of the SVG
- `Mouse.y`: Y coordinate of the mouse relative to the upper left corner of the SVG
- `Mouse.button`: Number of the mouse button that is currently pressed. Left button = 0, middle button = 1, right button = 2, no button pressed = -1.

Example:

This script creates a circle and continually sets its x coordinate to the mouse x position.
```javascript
var element = createNode('circle', {cx:300, cy:300, r:50});

var anim = function(f) {
  var x = Mouse.x;
  element.setAttribute('cx', x);

  if (Mouse.button == 0) {
    element.setAttribute('r', 60);
  } else {
    element.setAttribute('r', 50);
  }
}

animate(anim);
```

See examples:
- [1_mouse_follow.html](../examples/4_interaction/1_mouse_follow.html)

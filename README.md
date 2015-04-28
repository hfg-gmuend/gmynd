# G•M•Y•N•D

**A utility library and boilerplate for working with SVG in JavaScript**

## Reference

#### Node creation and manipulation

---------------------------------
##### `createNode(nodeName, attributes, draw)`
Creates a node.

Arguments:
- nodeName: The name of the node as a string, e.g. `'circle'`
- attributes (optional): An object giving the attribute names and values, e.g. `{cx:100, cy:200, r:80, transform:'scale(1.3)'}`
- draw (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

Returns:
- The new node as an HTML element.

Example:

The following will create a new group and a circle. The group is automatically added to the SVG, the circle is added to the group by using the `appendChild()` function.
```javascript
var myNewGroup = createNode('g');
var c = createNode('circle', {cx:100, cy:200, r:80, transform:'scale(1.3)'}, false);
myNewGroup.appendChild(c);
```

---------------------------------
##### createInstance(sourceElement, attributes, draw) 
Creates an instance of an element (`<use xlink:href="#someID" />`) that is defined in the defs of the SVG. 

Arguments:
- sourceElement: The source element or its id as a string.
- attributes (optional): An object giving the attribute names and values, e.g. `{x:200, y:200}`
- draw (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

Returns:
- The new node as an HTML element.

Example:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var elem = createNode('rect', {width:100, height:100}, false);
var defs = createNode('defs');
defs.appendChild(elem);
createInstance(elem, {x:200, y:200});
```

---------------------------------
##### setAttributes(element, attributes) 
Sets the attributes of a given element.

Arguments:
- element: The element whose attributes are to be set or changed.
- attributes: An object giving the attribute names and values, e.g. `{x:200, y:200}`

Returns:
- The given element.

Example:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var elem = createNode('rect', {width:100, height:100});
setAttributes(elem, {transform:'rotate(30)'});
```


---------------------------------
#### Transforms 

---------------------------------
##### setTransform(element, transforms) 
Replace all transforms on an object with new transforms.

Arguments:
- element: The element whose transforms are to be set or changed.
- transforms: An object, an array of objects or a string, e.g. `'translate(100 50) rotate(30)'` or `[{type:'translate', values:[100, 50]}, {type:'rotate', values:[30]}]`.

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


---------------------------------
##### appendTransform(element, transforms) 
Add one or more transforms to an object that already has transforms.

Arguments:
- element: The element where the transforms should be appended.
- transforms: An object, an array of objects or a string, e.g. `'translate(100 50) rotate(30)'` or `[{type:'rotate', values:[30]}, {type:'translate', values:[100, 50]}]`.

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

---------------------------------
##### clearTransform(element) 
Removes all transforms from an element.

Arguments:
- element: The element from where the transforms should be removed.

Returns:
- The transforms of the element that has been removed as an array of objects.


---------------------------------
##### getTransform(element) 
Converts the transform string of the given element to an array of objects.

Arguments:
- element: The element to get the transforms from.

Returns:
- The transforms of the element as an array of objects.


---------------------------------
##### transformFromString(str) 
Convert a transform string into an array of transform objects.


---------------------------------
#### Mouse 
The `Mouse` object provides information about the mouse position and which mouse button is pressed.

- Mouse.x: X coordinate of the mouse relative to the upper left corner of the SVG
- Mouse.y: Y coordinate of the mouse relative to the upper left corner of the SVG
- Mouse.button: Number of the mouse button that is currently pressed. Left button = 0, middle button = 1, right button = 2, no button pressed = -1.


---------------------------------
#### Animation 

---------------------------------
##### animate(function, fps) 
This function provides an easy way for frame based animation.

Arguments:
- function: The function, that will be executed every frame.
- fps (optional): Frames per second as a number. Default is 60.

Example:

This example creates a circle and moves it from left to right.
```javascript
var myCircle = createNode('circle', {cx:0, cy:300, r:20});

var myAnimationFunction = function(currentFrameNumber) {
  myCircle.setAttribute('cx', currentFrameNumber);
}

animate(myAnimationFunction);
```

---------------------------------
#### Math 

---------------------------------
##### random(low, high)
Returns a random number between `low` and `high`.  

Example:

Get a random number between 20 and 50. The result will be something like `38.519687323693304`.
```javascript
var n = random(20, 50);
```

---------------------------------
##### randomInt(low, high) 
Returns a random integer number between `low` and `high`. 

Example:

Get a random integer number between 2 and 4. The result will be `2`, `3` or `4`.
```javascript
var n = randomInt(2, 4);
```

---------------------------------
#### Color 

---------------------------------
##### gray(grayValue, alpha)
Returns a string representing the given gray color. This string could be used for any color attribute.

Arguments:
- grayValue: A number between 0 and 255.
- alpha (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a circle and sets the color to a middle gray.
```javascript
var col = gray(128);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```

---------------------------------
##### rgb(red, green, blue, alpha) 
Returns a string representing the given rgb color. This string could be used for any color attribute.

Arguments:
- red: A number between 0 and 255.
- green: A number between 0 and 255.
- blue: A number between 0 and 255.
- alpha (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a semi-transparent orange circle.
```javascript
var col = rgb(240, 175, 30, 0.5);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```

---------------------------------
##### hsl(hue, saturation, lightness, alpha) 
Returns a string representing the given hsl color. This string could be used for any color attribute.

Arguments:
- hue: A number between 0 and 360.
- saturation: A number between 0 and 1.
- lightness: A number between 0 and 1.
- alpha (optional): A number between 0 and 1. 0 = completely transparent, 1 = completely opaque

Returns:
- A string representing the given color.

Example:

This example creates a light blue circle.
```javascript
var col = hsl(200, 1, 0.8);
createNode('circle', {cx:300, cy:300, r:100, fill:col});
```


---------------------------------
Suggestions? Bugs? File an issue! :)

# G•M•Y•N•D

**A utility library and boilerplate for working with SVG in JavaScript**

## Reference

### NODE CREATION AND MANIPULATION 

#### createNode(nodeName, attributes, draw) ####

#### createInstance(sourceElement, attributes, draw) 

#### setAttributes(element, attributes) 

### TRANSFORM 

#### setTransform(element, transforms) 
Replace all transforms on an object with new transforms

#### appendTransform(element, transforms) 
Add one or more transforms to an object that already has transforms

#### clearTransform(element) 
Removes all transforms from an element

#### getTransform(element) 
Converts the transform string of the given element to an array of objects 

#### transformFromString(str) 
Convert a transform string into an array of transform objects

### MOUSE 

var Mouse = {x:0, y:0, button:-1};

### ANIMATION 

#### animate(fn, fps) 

### MATH 

#### random(low, high) 

#### randomInt(low, high) 

### COLOR 

#### gray(grayValue, alpha) 

#### rgb(red, green, blue, alpha) 

#### hsl(hue, saturation, brightness, alpha) 


Suggestions? Bugs? File an issue! :)

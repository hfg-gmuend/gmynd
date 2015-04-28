# G•M•Y•N•D

**A utility library and boilerplate for working with SVG in JavaScript**

## Reference

#### Node creation and manipulation

##### createNode(nodeName, attributes, draw)
Creates a node
Arguments:
- nodeName: The name of the node as a String, e.g. ´´´circle´´´
- attributes (optional): An object giving the attribute names and values, e.g. ´´´{cx:100, cy:200, r:80, transform:"rotate(30)"}´´´
- draw (optional): When ´´´true´´´, the new node will be automatically added to the first SVG element in the HTML document. When ´´´false´´´, you should store the new element in a variable and you need to add it to the document using ´´´appendChild()´´´. Default is ´´´true´´´.

##### createInstance(sourceElement, attributes, draw) 

##### setAttributes(element, attributes) 

#### Transforms 

##### setTransform(element, transforms) 
Replace all transforms on an object with new transforms

##### appendTransform(element, transforms) 
Add one or more transforms to an object that already has transforms

##### clearTransform(element) 
Removes all transforms from an element

##### getTransform(element) 
Converts the transform string of the given element to an array of objects 

##### transformFromString(str) 
Convert a transform string into an array of transform objects

#### Mouse 

var Mouse = {x:0, y:0, button:-1};

#### Animation 

##### animate(function, fps) 

#### Math 

##### random(low, high) 

##### randomInt(low, high) 

#### Color 

##### gray(grayValue, alpha) 

##### rgb(red, green, blue, alpha) 

##### hsl(hue, saturation, brightness, alpha) 


Suggestions? Bugs? File an issue! :)

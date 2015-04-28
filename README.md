# G•M•Y•N•D

**A utility library and boilerplate for working with SVG in JavaScript**

## Reference

#### Node creation and manipulation

##### createNode(nodeName, attributes, draw)
Creates a node.

Arguments:
- nodeName: The name of the node as a string, e.g. `'circle'`
- attributes (optional): An object giving the attribute names and values, e.g. `{cx:100, cy:200, r:80, transform:'scale(1.3)'}`
- draw (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

Returns:
- The new node as an HTML element.

Examples:

The following will create a new group and a circle. The group is automatically added to the SVG, the circle is added to the group by using the `appendChild()` function.
```javascript
var myNewGroup = createNode('g');
var c = createNode('circle', {cx:100, cy:200, r:80, transform:'scale(1.3)'}, false);
myNewGroup.appendChild(c);
```


##### createInstance(sourceElement, attributes, draw) 
Creates an instance of an element (`<use xlink:href="#someID" />`) that is defined in the defs of the SVG. 

Arguments:
- sourceElement: The source element or its id as a string.
- attributes (optional): An object giving the attribute names and values, e.g. `{x:200, y:200}`
- draw (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

Returns:
- The new node as an HTML element.

Examples:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var elem = createNode('rect', {width:100, height:100}, false);
var defs = createNode('defs');
defs.appendChild(elem);
createInstance(elem, {x:200, y:200});
```

##### setAttributes(element, attributes) 
Sets the attributes of a given element.

Arguments:
- element: The element whose attributes are to be set or changed.
- attributes: An object giving the attribute names and values, e.g. `{x:200, y:200}`

Returns:
- The given element.

Examples:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var elem = createNode('rect', {width:100, height:100});
setAttributes(elem, {transform:'rotate(30)'});
```


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

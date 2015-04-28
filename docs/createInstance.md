[Back to reference](../README.md)

##### `createInstance(sourceElement, attributes, draw)` 
Creates an instance of an element (`<use xlink:href="#someID" />`) that is defined in the defs of the SVG. 

Arguments:
- `sourceElement`: The source element or its id as a string.
- `attributes` (optional): An object giving the attribute names and values, e.g. `{x:200, y:200}`
- `draw` (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

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
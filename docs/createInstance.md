[Back to reference](../README.md)

##### `createInstance(sourceElement, attributes, parent)` 
Creates an instance of an element (`<use xlink:href="#someID" />`) that is defined in the defs of the SVG. 

Arguments:
- `sourceElement`: The source element or its id as a string.
- `attributes` (optional): An object giving the attribute names and values, e.g. `{x:200, y:200}`
- `parent` (optional): When you don't provide a value here, the new node will be automatically added to the SVG element in the HTML document. Alternatively you could provide another node as the parent node. When giving the value `false` the new node won't be added to the HTML document, so you should store it in a variable and you need to add it to the document using `appendChild()`. 

Returns:
- The new node as an HTML element.

Example:

The following script creates a rect, puts it inside the defs of the SVG and then creates an instance. 
```javascript
var defs = createNode('defs');
var elem = createNode('rect', {width:100, height:100}, defs);
createInstance(elem, {x:200, y:200});
```

See examples:
- [5_symbols.html](../examples/1_nodes/5_symbols.html)

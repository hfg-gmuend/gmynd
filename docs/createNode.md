[Back to reference](../README.md)

##### `createNode(nodeName, attributes, parent)`
Creates a node.

Arguments:
- `nodeName`: The name of the node as a string, e.g. `'circle'`
- `attributes` (optional): An object giving the attribute names and values, e.g. `{cx:100, cy:200, r:80, transform:'scale(1.3)'}`
- `parent` (optional): When you don't provide a value here, the new node will be automatically added to the SVG element in the HTML document. Alternatively you could provide another node as the parent node. When giving the value `false` the new node won't be added to the HTML document, so you should store it in a variable and you need to add it to the document using `appendChild()`. 

Returns:
- The new node as an HTML element.

Example:

The following will create a new group and a circle. The group is automatically added to the SVG, the circle is added to the group by using the `appendChild()` function.
```javascript
var myNewGroup = createNode('g');
var c = createNode('circle', {cx:100, cy:200, r:80, transform:'scale(1.3)'}, myNewGroup);
```

See examples:
- [1_basics.html](../examples/1_nodes/1_basics.html)
- [2_create_row.html](../examples/1_nodes/2_create_row.html)
- [3_grouping.html](../examples/1_nodes/3_grouping.html)
- [4_clipping.html](../examples/1_nodes/4_clipping.html)

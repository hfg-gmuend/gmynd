[Back to reference](../README.md)

### `deleteProps(obj, props)`

Deletes one or multiple properties (`props`) of a given object (`obj`). `props` can either be a string or an array of
strings representing the properties to be deleted. Nothing is returned, the function mutates the passed object `obj`.

#### Example:

If you have data like this:

```javascript
let supergirl = {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54}
```

This will delete the properties `Height` and `Weight`:

```javascript
gmynd.deleteProps(supergirl, ["Height", "Weight"]);
```

supergirl now looks like this:

```
{Name: "Supergirl", Alignment: "good", Gender: "Female"}
```

See also: [`deletePropsInData(data, props)`](deleteProps.md)

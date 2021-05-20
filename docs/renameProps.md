[Back to reference](../README.md)

### `renameProps(data, props, names)`

Renames one or more properties (`props`) of any object in `data` (which can be either an array of objects or a single
object). The old property names to be renamed are listed in `props`, while the new property names are listed in `names`.
They can both be either a string or an array of strings. You must pass the same number of `props` and `names`. Returns
the changed array of objects or, in the case of a passed object, the changed object.

#### Example 1:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Steppenwolf", Alignment: "bad", Gender: "Male", Height: 183, Weight: 91},
  {Name: "Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57},
  {Name: "Sunspot", Alignment: "good", Gender: "Male", Height: 173, Weight: 77},
  {Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68},
  {Name: "Superboy-Prime", Alignment: "bad", Gender: "Male", Height: 180, Weight: 77},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54},
  {Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101}
]
```

This will rename the properties `Height` and `Weight` to `bodySize` and `mass`:

```javascript
gmynd.renameProps(superheroes, ["Height", "Weight"], ["bodySize", "mass"]);
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Alignment: "bad", Gender: "Male", bodySize: 183, mass: 91},
  {Name: "Storm", Alignment: "good", Gender: "Female", bodySize: 180, mass: 57},
  {Name: "Sunspot", Alignment: "good", Gender: "Male", bodySize: 173, mass: 77},
  {Name: "Superboy", Alignment: "good", Gender: "Male", bodySize: 170, mass: 68},
  {Name: "Superboy-Prime", Alignment: "bad", Gender: "Male", bodySize: 180, mass: 77},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", bodySize: 165, mass: 54},
  {Name: "Superman", Alignment: "good", Gender: "Male", bodySize: 191, mass: 101}
]
```

#### Example 2:

This works as well if you pass a single object and/or a single pair of `prop` and `name`:

```javascript
let supergirl = {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54};
```

This will rename the property `Alignment` to `Conviction`:

```javascript
supergirl = gmynd.deleteProps(supergirl, "Alignment", "Conviction");
```

This is the result:

```javascript
{Name: "Supergirl", Conviction: "good", Gender: "Female", Height: 165, Weight: 54}
```

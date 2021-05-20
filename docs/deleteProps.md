[Back to reference](../README.md)

### `deleteProps(data, props)`

Deletes one or multiple properties (`props`) from any given object in `data` (which can either be an array of objects or a single object). `props` can either be a string or an array of
strings representing the properties to be deleted. Returns the changed object array or, in the case of a passed object, the changed object.

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

This will delete the properties `Height` and `Weight` from every object in `data`:

```javascript
gmynd.deleteProps(superheroes, ["Height", "Weight"]);
```

This is the result:

```javascript
[
  {Name: "Steppenwolf", Alignment: "bad", Gender: "Male"},
  {Name: "Storm", Alignment: "good", Gender: "Female"},
  {Name: "Sunspot", Alignment: "good", Gender: "Male"},
  {Name: "Superboy", Alignment: "good", Gender: "Male"},
  {Name: "Superboy-Prime", Alignment: "bad", Gender: "Male"},
  {Name: "Supergirl", Alignment: "good", Gender: "Female"},
  {Name: "Superman", Alignment: "good", Gender: "Male"}
]
```

#### Example 2:

This works as well if you pass a single object and/or a single `prop`:

```javascript
let supergirl =  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54};
```

This will delete the property `Alignment` from the object:

```javascript
supergirl = gmynd.deleteProps(supergirl, "Alignment");
```

This is the result:

```javascript
{Name: "Supergirl", Gender: "Female", Height: 165, Weight: 54}
```

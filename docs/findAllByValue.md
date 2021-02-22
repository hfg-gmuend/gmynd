[Back to reference](../README.md)

### `findAllByValue(data, prop, val)`

Filters objects by a given value for a given property (key). Returns all matching objects in a new array.

#### Examples:

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

##### Example 1:

This will find and return all elements in `superheroes` whose `Gender` is `"Female"`:

```javascript
let femaleSuperheroes = gmynd.findAllByValue(superheroes, "Gender", "Female");
```

This is the result:

```javascript
[
  {Name: "Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57},
  {Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54}
]
```

##### Example 2:

If you want to filter your data by several property values, you can use the function several times in a row. (Although
this is bad in terms of performance, the function remains easier to use.)

This will find and return all elements in `superheroes` whose `Gender` is `"Male"` and whose `Alignment` is `"good"`:

```javascript
let maleGoodSuperheroes = gmynd.findAllByValue(superheroes, "Gender", "Male");
maleGoodSuperheroes = gmynd.findAllByValue(maleGoodSuperheroes, "Alignment", "good");
```

This is the result:

```javascript
[
  {Name: "Sunspot", Alignment: "good", Gender: "Male", Height: 173, Weight: 77},
  {Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68},
  {Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101},
]
```

Credits to [elclanrs](https://stackoverflow.com/a/13964186)
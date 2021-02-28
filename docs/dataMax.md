[Back to reference](../README.md)

### `dataMax(data, prop)`

Finds the highest numeric value of a given property `prop` in all objects in `data` and returns it.

#### Example:

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

This will find and return the biggest `Height` of all objects in `superheroes`:

```javascript
let highest = gmynd.dataMax(superheroes, "Height");

// returns: 191
```
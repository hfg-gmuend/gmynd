[Back to reference](../README.md)

### `dataMin(data, prop)`

Finds the smallest and biggest numeric values of a given property `prop` in all objects in `data` and returns it as an
object with the properties `min` and `max`.

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

This will find and return the extreme values for `Height` of all objects in `superheroes`:

```javascript
let extremes = gmynd.dataExtremes(superheroes, "Height");
```


This is the result:

```javascript
  {min: 165, max: 191}
```

See also: [`dataMin(data, prop) -> number`](docs/dataMin.md), [`dataMax(data, prop) -> number`](docs/dataMax.md)
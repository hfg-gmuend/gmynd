[Back to reference](../README.md)

### `findAllByValue(set, prop, val)`

Filters objects by a given value for a given property (key). Returns all matching objects in a new array.

#### Example:

If you have data like this:
```javascript
let superheroes = [ 
  ...
  {Name:"Steppenwolf", Alignment:"bad", Gender:"Male", Height:183, Weight:91},
  {Name:"Storm", Alignment:"good", Gender:"Female", Height:180, Weight:57},
  {Name:"Sunspot", Alignment:"good", Gender:"Male", Height:173, Weight:77},
  {Name:"Superboy", Alignment:"good", Gender:"Male", Height:170, Weight:68},
  {Name:"Superboy-Prime", Alignment:"bad", Gender:"Male", Height:180, Weight:77},
  {Name:"Supergirl", Alignment:"good", Gender:"Female", Height:165, Weight:54},
  {Name:"Superman", Alignment:"good", Gender:"Male", Height:191, Weight:101},
  ...
]
```

This will find and return all elements in `superheroes` whose `Gender` is `"Female"`:
```javascript
let femaleSuperheroes = gmynd.findAllByValue(superheroes, "Gender", "Female");
```

This is the result:
```javascript
[
  ...
  {Name:"Storm", Alignment:"good", Gender:"Female", Height:180, Weight:57},
  {Name:"Supergirl", Alignment:"good", Gender:"Female", Height:165, Weight:54},
  ...
]
```

Credits to [elclanrs](https://stackoverflow.com/a/13964186)
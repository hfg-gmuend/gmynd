[Back to reference](../README.md)

### `findFirstByValue(data, prop, val)`

Returns the first object in `data` matching a given value `val` for a given property `prop`. This is useful when
searching for specific objects in an array of objects with a unique property value.

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

This will find and return the `"Supergirl"` object:

```javascript
let supergirl = gmynd.findFirstByValue(superheroes, "Name", "Supergirl");
```

This is the result:

```javascript
{
  Name:"Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54
}
```

##### Example 2:

If there are several objects matching the given criteria, only the first object found in `data` is returned:

```javascript
let firstGoodHero = gmynd.findFirstByValue(superheroes, "Alignment", "good");
```

This is the result:

```javascript
{
  Name:"Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57
}
```

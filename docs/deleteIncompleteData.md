[Back to reference](../README.md)

### `deleteIncompleteData (data, props, emptyValues=[])`

Filters all objects in `data` by checking if each element has every required property (`props`). Returns an array with
only those objects who have all required properties. `props` can be a string or an array of strings. This function is
useful to get rid of "dead" data elements that cannot be displayed or used properly.

**Note:** Properties (`keys`) whose values are either `undefined`,`null` or `""` are considered as missing properties
and are thus not included the returned array. You can pass additional values to be considered as incomplete data to
emptyValues (as single value or as an array of values).

#### Examples:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Storm", EyeColor: "blue"},
  {Name: "Stormtrooper", EyeColor: undefined, HairColor: undefined},
  {Name: "Superboy", EyeColor: "none", HairColor: "black"},
  {Name: "Supergirl", EyeColor: "blue", HairColor: "blond", Height: 165, Weight: 54},
  {Name: "Superman", EyeColor: null, HairColor: null},
  {Name: "Swarm", EyeColor: "yellow", HairColor: ""}
]
```

##### Example 1:

This finds and returns all elements in `superheroes` that have the property `EyeColor`:

```javascript
let filteredHeroes = gmynd.deleteIncompleteData(superheroes, "EyeColor");
```

This is the result:

```javascript
[
  {Name: "Storm", EyeColor: "blue"},
  {Name: "Superboy", EyeColor: "none", HairColor: "black"},
  {Name: "Supergirl", EyeColor: "blue", HairColor: "blond", Height: 165, Weight: 54},
  {Name: "Swarm", EyeColor: "yellow", HairColor: ""}
]
```

##### Example 2:

This finds and returns all elements in `superheroes` that have both the `EyeColor` and `HairColor` properties:

```javascript
let filteredHeroes = gmynd.deleteIncompleteData(superheroes, ["EyeColor", "HairColor"]);
```

This is the result:

```javascript
[
  {Name: "Superboy", EyeColor: "none", HairColor: "black"},
  {Name: "Supergirl", EyeColor: "blue", HairColor: "blond", Height: 165, Weight: 54}
]
```

##### Example 3:

This adds the string `"none"` to the blacklist of values for the `EyeColor` and `HairColor` properties:

```javascript
let filteredHeroes = gmynd.deleteIncompleteData(superheroes, ["EyeColor", "HairColor"], "none");
```

This is the result:

```javascript
[
  {Name: "Supergirl", EyeColor: "blue", HairColor: "blond", Height: 165, Weight: 54}
]
```
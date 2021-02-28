[Back to reference](../README.md)

### `convertPropToBoolean(data, prop, strictMode = false)`

Converts every value of a given property `prop` in every object in `data` to a boolean value and returns a copy
of `data` where the original values are overwritten with the new values. If `strictMode` is set to `true`, only values
that correspond to `1` or `true` are set to `true`. If `strictMode` is set to `false` (default value), values that can
be cast as a numeric value greater than `1` are also set to true.

Generally, everything this function doesn't recognize as `true` is set to `false`. This means that every data type other
than `strings`, `numbers` or `booleans` are set to `false`. Here is the list of strings that are recognized as `true` (
case-insensitive):

```
["1", "true", "yes", "+", "wahr", "ja"];
```

This function is useful, for example, if you encounter problems when converting from CSV to JSON where boolean values
are usually converted into strings or numbers rather than boolean values.

**Note:** Objects in `data` that don't have the given property, are added the given property with the value `false`.

### Examples:

If you have data like this:

```javascript
let superheroes = [
  {Name: "Spider-Man"},
  {Name: "Steppenwolf", flying: "false"},
  {Name: "Storm", flying: "yes"},
  {Name: "Sunspot", flying: 1},
  {Name: "Superboy", flying: "WAHR"},
  {Name: "Supergirl", flying: 100},
  {Name: "Superman", flying: true},
]
```

#### Example 1:

This will convert every `flying` value to a `boolean`:

```javascript
let superheroes = gmynd.convertPropToBoolean(superheroes, "flying");
```

This is the result:

```javascript
[
  {Name: "Spider-Man", flying: false},
  {Name: "Steppenwolf", flying: false},
  {Name: "Storm", flying: true},
  {Name: "Sunspot", flying: true},
  {Name: "Superboy", flying: true},
  {Name: "Supergirl", flying: true},
  {Name: "Superman", flying: true},
]
```

#### Example 2 (Using strictMode):

This does the same, but numerical values that aren't converted to exactly `1`, are set to `false`:

```javascript
let superheroes = gmynd.convertPropToBoolean(superheroes, "flying", true);
```

This is the result:

```javascript
[
  {Name: "Spider-Man", flying: false},
  {Name: "Steppenwolf", flying: false},
  {Name: "Storm", flying: true},
  {Name: "Sunspot", flying: true},
  {Name: "Superboy", flying: true},
  {Name: "Supergirl", flying: false}, // this is the only difference to example 1.
  {Name: "Superman", flying: true},
]
```
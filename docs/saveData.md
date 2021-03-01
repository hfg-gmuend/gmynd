[Back to reference](../README.md)

### `saveData (data, filename = 'export.json', pretty = true)`

Saves the given `data` as a json file to the downlaods folder of the browser. The default file name is `export.json` but you can give another name as the second argument. `pretty` set to false will save a file without line breaks which makes it a bit smaller but also less legible.

#### Example:

If this is your data:
```javascript
let superheroes = [
  {Name: "Superboy", Height: 170, Weight: 68},
  {Name: "Supergirl", Height: 165, Weight: 54},
  {Name: "Superman", Height: 191, Weight: 101}
]
```

##### Example 1:

```javascript
gmynd.saveData(superheroes);
```

... gives you this result in the file `export.json`:

```javascript
[{
  "Name":"Superboy",
  "Height":170,
  "Weight":68
},{
  "Name":"Supergirl",
  "Height":165,
  "Weight":54
},{
  "Name":"Superman",
  "Height":191,
  "Weight":101
}]
```

##### Example 2:

```javascript
gmynd.saveData(superheroes, 'heroes.json', false)
```

... gives you this result in the file `heroes.json`:

```javascript
[{"Name":"Superboy","Height":170,"Weight":68},{"Name":"Supergirl","Height":165,"Weight":54},{"Name":"Superman","Height":191,"Weight":101}]
```


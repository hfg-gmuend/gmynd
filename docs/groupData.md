[Back to reference](../README.md)

##### `sortData(data, props)`

Sorts a data array by the given property names (keys). It returns a hierarchical object where all different values of the given properties are the new keys. Give `props` as an array of strings or just as a string if you have just one property for grouping.

If you have arrays as values of a given property the item will be put in all these groups (see example 2).

### Example 1:

If you have data like this:
```javascript
let superheroes = [ 
  ...
  {Name: "Poison Ivy", Alignment: "bad", Gender: "Female", EyeColor: "green", Race: "Human"},
  {Name: "Polaris", Alignment: "good", Gender: "Female", EyeColor: "green", Race: "Mutant"},
  {Name: "Power Girl", Alignment: "good", Gender: "Female", EyeColor: "blue", Race: "Kryptonian"},
  {Name: "Power Man", Alignment: "good", Gender: "Male", EyeColor: undefined, Race: "Mutant"},
  {Name: "Predator", Alignment: "bad", Gender: "Male", EyeColor: undefined, Race: "Yautja"},
  {Name: "Professor X", Alignment: "good", Gender: "Male", EyeColor: "blue", Race: "Mutant"},
  ...
]
```

This will group `superheroes` by `Gender` and `Alignment`:
```javascript
let groupedSuperheroes = gmynd.groupData(superheroes, ['Gender', 'Alignment']);
```

The result will be something like this where every `{…}` contains one of the original data item:
```javascript
{
  Female: {
    bad: [ {…}, {…}, {…}, … ],
    good: [ {…}, {…}, {…}, … ],
    neutral: [ {…}, {…}, {…}, … ]
  },
  Male: {
    bad: [ {…}, {…}, {…}, … ],
    good: [ {…}, {…}, {…}, … ],
    neutral: [ {…}, {…}, {…}, … ],
    undefined: [ {…}, {…}, {…}, … ]
  },
  undefined: {
    bad: [ {…}, {…}, {…}, … ],
    good: [ {…}, {…}, {…}, … ],
    neutral: [ {…}, {…} ],
    undefined: [ {…} ]
  }
}
```

### Example 2:

```javascript
let movies = [ 
  ...
  {title: "Inception", genre: ["Action", "Adventure", "Sci-Fi"], ...},
  {title: "Solaris", genre: ["Drama", "Mystery", "Sci-Fi"], ...},
  ...
]
```

Grouping this dataset on `genre`:
```javascript
let groupedMovies = gmynd.groupData(movies, 'genre');
```

```javascript
{
  "Action": [ {title:"Inception", …}, {…}, {…}, … ],
  "Adventure": [ {title:"Inception", …}, {…}, {…}, … ],
  "Sci-Fi": [ {title:"Inception", …}, {title:"Solaris", …}, {…}, … ],
  "Drama": [ {title:"Solaris", …}, {…}, {…}, … ],
  "Mystery": [ {title:"Solaris", …}, {…}, {…}, … ],
  ...
}
```


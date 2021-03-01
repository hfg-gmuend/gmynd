[Back to reference](../README.md)

### `addPropRank(data, prop, propName = prop + "Rank")`

Calculates the rank of a numeric object property `prop`. 
The rank is stored in the object as a new property `propName` with a value from `0` to `data.length - 1` (in most cases). The smallest value will have rank `0`. If two values are equal, both objects will get the same rank.

The returned data is a sorted version of the original data. The original data will also have the new property `propName` but remains unsorted. 

### Example:

If you have data like this:

```javascript
let superheroes = [
    {Name: "Bizarro", Height: 191},
    {Name: "Storm", Height: 180},
    {Name: "Sunspot", Height: 173},
    {Name: "Superboy", Height: 170},
    {Name: "Superboy-Prime", Height: 180},
    {Name: "Supergirl", Height: 165},
    {Name: "Superman", Height: 191},
    {Name: "Vision", Height: 191},
  ]
```

This adds the rank of the property `Height` to the data:

```javascript
let rankedSuperheroes = gmynd.addPropRank(superheroes, "Height");
```

The returned data `rankedSuperheroes` will look like this:
```javascript
[
  { Name: "Supergirl", Height: 165, HeightRank: 0 },
  ​{ Name: "Superboy", Height: 170, HeightRank: 1 },
  ​{ Name: "Sunspot", Height: 173, HeightRank: 2 },
  ​{ Name: "Storm", Height: 180, HeightRank: 3 },
  ​{ Name: "Superboy-Prime", Height: 180, HeightRank: 3 },
  ​{ Name: "Bizarro", Height: 191, HeightRank: 5 },
  ​{ Name: "Superman", Height: 191, HeightRank: 5 },
  ​{ Name: "Vision", Height: 191, HeightRank: 5 }
]
```

The original `superheroes` remain unsorted but has also the new information:
```javascript
[
  ​{ Name: "Bizarro", Height: 191, HeightRank: 5 },
  ​{ Name: "Storm", Height: 180, HeightRank: 3 },
  ​{ Name: "Sunspot", Height: 173, HeightRank: 2 },
  ​{ Name: "Superboy", Height: 170, HeightRank: 1 },
  ​{ Name: "Superboy-Prime", Height: 180, HeightRank: 3 },
  { Name: "Supergirl", Height: 165, HeightRank: 0 },
  ​{ Name: "Superman", Height: 191, HeightRank: 5 },
  ​{ Name: "Vision", Height: 191, HeightRank: 5 }
]
```

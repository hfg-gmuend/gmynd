[Back to reference](../README.md)

### `addPropPercentage(data, prop, propName = prop + "Percentage")`

Calculates the percentage of a numeric object property `prop` to the total for this property of all `data` objects. The
percentage is stored in the object as a new property `propName` with a value from `0` to `1`.

### Example:

If you have data like this representing a superhero family's weekend activity:

```javascript
let rescuedPeople = [
  {Name: "Superboy", rescued: 5},
  {Name: "Supergirl", rescued: 8},
  {Name: "Superman", rescued: 3},
  {Name: "Superwoman", rescued: 4}
]
```

This calculates the percentage of `rescued` people that each superhero contributed to the family's total count (which is
20):

```javascript
let rescuedPeople = gmynd.addPropPercentage(rescuedPeople, "rescued");
```

This is the result:

```javascript
[
  {Name: "Superboy", rescued: 5, rescuedPercentage: 0.25},
  {Name: "Supergirl", rescued: 8, rescuedPercentage: 0.4},
  {Name: "Superman", rescued: 3, rescuedPercentage: 0.15},
  {Name: "Superwoman", rescued: 4, rescuedPercentage: 0.2}
]
```
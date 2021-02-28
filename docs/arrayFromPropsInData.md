[Back to reference](../README.md)

### `arrayFromPropsInData(arr, props, propName, deleteProps = true, fallbackVal = null)`

Pushes the values of all given properties (`props`) of every object in `data` each into an array. This array is saved as
a new property `propName` in each respective object. If any of the given `props` does not exist, `fallbackValue` (
default value is `null`) is pushed into the array.

This function is useful e.g. when data over time is given like the yearly gdp of a country, and you don't want to access
every year by a specific property.

### Example:

If you have data like this:

```javascript
let rescuedPeople = [
    {"Name": "Superman", "Mon": 4, "Tue": 9, "Wed": 12, "Thu": 4, "Fri": 29},
    {"Name": "Superwoman", "Mon": 5, "Tue": 2, "Wed": null, "Thu": 4, "Fri": 8, "Sat": 3, "Sun": 8},
    {"Name": "Superboy", "Mon": "none", "Tue": 1, "Wed": 1, "Thu": 2, "Fri": 1, "Sat": 19, "Sun": 9},
    {"Name": "Supergirl", "Sat": 6, "Sun": 7}
]
```

This takes all elements in `days` as properties of `rescuedPeople` and pushes the corresponding property values into an
array. This array is saved as a new property called `"weeklyRescue"` into each object and deletes all properties whose
value is contained in that array:

```javascript
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let rescuedPeople = gmynd.arrayFromPropsInData(rescuedPeople, days, "weeklyRescue");
```

This is the result:

```javascript
[
    {"Name": "Superman", "weeklyRescue": [4, 9, 12, 4, 29, null, null]},
    {"Name": "Superwoman", "weeklyRescue": [5, 2, null, 4, 8, 3, 8]},
    {"Name": "Superboy", "weeklyRescue": [null, 1, 1, 2, 1, 19, 9]},
    {"Name": "Supergirl", "weeklyRescue": [null, null, null, null, null, 6, 7]}
]
```

See also: [`arrayFromProps(obj, props, fallbackVal = null)`](arrayFromProps.md)
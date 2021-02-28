[Back to reference](../README.md)

### `arrayFromProps(obj, props, fallbackVal = null)`

Pushes the values of all given properties (`props`) of an object (`obj`) into an array and returns that array. This is
useful e.g. when data over time is given like the yearly gdp of a country, and you don't want to access every year by a
specific property. If any of the given `props` does not exist, `fallbackValue` (default value is `null`) is pushed into
the array.

### Examples:

#### Example 1:

If you have data like this:

```javascript
let rescuedPeople = {
  "Mon": 4,
  "Tue": 9,
  "Wed": 12,
  "Thu": 4,
  "Fri": 29,
  "Sat": 1
}
```

This takes all elements in `days` as properties of `rescuedPeople` and pushes the corresponding property values into an
array. As we don't want `null` for Sunday (`"Sun"`), we set `fallbackValue` to `0`:

```javascript
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let rescueCount = gmynd.arrayFromProps(rescuedPeople, days, 0);
```

This is the result:

```javascript
[4, 9, 12, 4, 29, 1, 0]
```

#### Example 2:

Let's take this data here representing economic growth of Burundi from 1961 to 2016:

```javascript
let growthValues = {
  "1961": -13.74613505,
  "1962": 9.063157935,
  // [...]
  "2015": -3.921142749,
  "2016": -0.570434452
};
```
In many cases like this you should consider writing a quick `for`-loop to get all needed properties into an array:
```javascript
let properties = [];
for (let i = 1961; i < 2016; i++) {
  properties.push(i.toString());
}
```
Then, it works the same as before:
```javascript
let growthArray = gmynd.arrayFromProps(growthValues, properties);
```

This is the result:

```javascript
[-13.74613505, 9.063157935, /* [...] */, -3.921142749, -0.570434452]
```
[Back to reference](../README.md)

### `intersectData(baseData, filterData, prop1, prop2 = prop1) `

Creates a filtered version of `baseData` where only elements are kept that are also found in `filterData`. The filtered
objects are returned as a new array of objects. The property value of `prop1` in a `baseData` object is compared to the
property values of `prop2` in each `filterData` object. If the values match for at least one pair of objects,
the `baseData` object is kept. If not, the current baseData object is kicked out. The returned array represents the
intersection of objects in both original arrays.

**Note:** If `prop1` and `prop2` are the same, you can omit `prop2`.

### Example

Let's say you have the following data with country names and codes, but there are, for example, entries for "World"
and "Bavaria", which are not considered as sovereign nations by the UN.

```javascript
let countryData = [
  {"Entity": "Armenia", "Code": "ARM"},
  {"Entity": "Aruba", "Code": "ABW"},
  {"Entity": "Australia", "Code": "AUS"},
  {"Entity": "Bavaria", "Code": "BAY"},
  {"Entity": "World", "Code": "WORLD"},
  // ...
]
```

So, you need a dataset which contains only the sovereign UN nations and, in this case, their respective Codes (they
don't have to be in the same order):

```javascript
let sovereignNations = [
  {"Country": "Australia", "ISO-ALPHA-3": "AUS"},
  {"Country": "Aruba", "ISO-ALPHA-3": "ABW"},
  {"Country": "Armenia", "ISO-ALPHA-3": "ARM"},
  // ...
]
```

Now you can filter your dataset. This only keeps countries in `countryData`, whose `"Code"` value is found
as `"ISO-ALPHA-3"` value in any object of `sovereignNations`:

```javascript
let filteredData = gmynd.intersectData(countryData, sovereignNations, "Code", "ISO-ALPHA-3");
```

This will be the result:

```javascript
[
  {"Entity": "Armenia", "Code": "ARM"},
  {"Entity": "Aruba", "Code": "ABW"},
  {"Entity": "Australia", "Code": "AUS"},
  // ...
]
```


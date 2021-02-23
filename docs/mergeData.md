[Back to reference](../README.md)

### `mergeData(data1, data2, props1, props2 = props1) `

Combines two data arrays comparing some properties. It goes through all elements in the first data array (`data1`) and searches for an element in the second array (`data2`) where the value(s) for `props1` matches the values for `props2`. If such an element is found, all properties from `data2` are copied to `data1`. Note, that it might overwrite some information in `data1`. If no matching element is found, this entry from `data1` will not be copied to the result. 

You can give `props1` and `props2` as an array of strings if you want to compare multiple props or just as a string. If the property names for matching are exactly the same, you can omit `props2`.

#### Example1:

If you have data with country names or codes but no geolocation ...
```javascript
let worldGenderRatio = [ 
  ...
  {"Entity": "Armenia", "Code": "ARM", "Year": 2010, "FemalePerc": 53.2079985875687},  
  {"Entity": "Aruba", "Code": "ABW", "Year": 2010, "FemalePerc": 52.3287267004377},  
  {"Entity": "Australia", "Code": "AUS", "Year": 2010, "FemalePerc": 49.9937545380187},
  ...
]
```
... and a file with this information (not necessarily in the same order) ...
```javascript
let countryLocations = [ 
  ...
  {"Country": "Australia", "ISO-ALPHA-3": "AUS", "lat": -25.274398, "long": 133.775136},
  {"Country": "Aruba", "ISO-ALPHA-3": "ABW", "lat": 12.52111, "long": -69.968338},
  {"Country": "Armenia", "ISO-ALPHA-3": "ARM", "lat": 40.069099, "long": 45.038189},
  ...
]
```
... you could merge them like this:
```javascript
let mergedData = gmynd.mergeData(worldGenderRatio, countryLocations, "Code", "ISO-ALPHA-3");
```
This will be the result:
```javascript
[ 
  ...
  {"Entity": "Armenia", "Code": "ARM", "Year": 2010, "FemalePerc": 53.2079985875687, "Country": "Australia", "ISO-ALPHA-3": "AUS", "lat": -25.274398, "long": 133.775136},  
  {"Entity": "Aruba", "Code": "ABW", "Year": 2010, "FemalePerc": 52.3287267004377, "Country": "Aruba", "ISO-ALPHA-3": "ABW", "lat": 12.52111, "long": -69.968338},  
  {"Entity": "Australia", "Code": "AUS", "Year": 2010, "FemalePerc": 49.9937545380187, "Country": "Armenia", "ISO-ALPHA-3": "ARM", "lat": 40.069099, "long": 45.038189},
  ...
]
```


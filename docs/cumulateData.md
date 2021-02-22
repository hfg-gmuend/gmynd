[Back to reference](../README.md)

### `cumulateData(data, props, calculations = [])`

Cumulates a data array by the given property names (keys) and calculations. It returns a new array of objects where each combination of the different values for the given props builds one of the entries. If you don't give calculations it will only count the entries matching the same combination of the values (see example 1).

You could do some more stuff with the data by giving the third paramter `calculations` which is an array of objects like the following. Each of them describes one calculation you want to perform with the data. By now these are the possible calculations:

```javascript
{'value':'Height', 'method':'Sum', 'title':'HSUM'},   
{'value':'Height', 'method':'Average', 'title':'HeightAv'},   
{'value':'Height', 'method':'Percentile', 'p':0.25, 'title':'HeightQuantile1'},
{'value':'Height', 'method':'Median'},
{'value':'Height', 'method':'Percentile', 'p':0.75, 'title':'HeightQuantile3'},
{'value':'Height', 'method':'Min'},
{'value':'Height', 'method':'Max'},
```

A calculation needs to know which `value` to take and which calculation `method` to use. If you don't give a `title`, the key of the new property will be `value + method`. For the method `Percentile` you must give the property `p`.


#### Examples:

If you have data like this:
```javascript
let superheroes = [ 
  ...
  {Name:"Steppenwolf", Alignment:"bad", Gender:"Male", Height:183, Weight:91},
  {Name:"Storm", Alignment:"good", Gender:"Female", Height:180, Weight:57},
  {Name:"Sunspot", Alignment:"good", Gender:"Male", Height:173, Weight:77},
  {Name:"Superboy", Alignment:"good", Gender:"Male", Height:170, Weight:68},
  {Name:"Superboy-Prime", Alignment:"bad", Gender:"Male", Height:180, Weight:77},
  {Name:"Supergirl", Alignment:"good", Gender:"Female", Height:165, Weight:54},
  {Name:"Superman", Alignment:"good", Gender:"Male", Height:191, Weight:101},
  ...
]
```

##### Example 1:

This will cumulate `superheroes` by `Gender` and `Alignment`:
```javascript
let cumulatedSuperheroes = gmynd.cumulateData(res, ["Gender", "Alignment"])
```

This is the result:
```javascript
[
  {Gender:"Male", Alignment:"good", count:206},
  {Gender:"Male", Alignment:"bad", count:111},
  {Gender:"Female", Alignment:"good", count:114},
  {Gender:"Male", count:3},
  {Gender:"Female", Alignment:"bad", count:25},
  {Gender:"Male", Alignment:"neutral", count:15},
  {Alignment:"good", count:12},
  {Gender:"Female", Alignment:"neutral", count:2},
  {Alignment:"bad", count:2}
]
```

##### Example 2:

This will cumulate `superheroes` by `Gender` and `Alignment` and doing some calculations on `Weight` and `Height`:
```javascript
let calculations = [
  {'value':'Height', 'method':'Average', 'title':'HeightAv'},   
  {'value':'Weight', 'method':'Min'},
  {'value':'Weight', 'method':'Max'},
]
let cumulatedSuperheroes = gmynd.cumulateData(res, ["Gender", "Alignment"], calculations)
```

This is the result:
```javascript
[
  {Gender:"Male", Alignment:"good", count:206, HeightAv:189.14077669902912, WeightMin:4, WeightMax:900},
  {Gender:"Male", Alignment:"bad", count:111, HeightAv:192.63243243243244, WeightMin:47, WeightMax:817},
  {Gender:"Female", Alignment:"good", count:114, HeightAv:173.7017543859649, WeightMin:41, WeightMax:473},
  {Gender:"Male", count:3, HeightAv:200, WeightMin:81, WeightMax:358},
  {Gender:"Female", Alignment:"bad", count:25, HeightAv:174.38, WeightMin:50, WeightMax:630},
  {Gender:"Male", Alignment:"neutral", count:15, HeightAv:245.86666666666667, WeightMin:16, WeightMax:855},
  {Alignment:"good", count:12, HeightAv:179.5, WeightMin:39, WeightMax:383},
  {Gender:"Female", Alignment:"neutral", count:2, HeightAv:174, WeightMin:50, WeightMax:67},
  {Alignment:"bad", count:2, HeightAv:197, WeightMin:96, WeightMax:360}
]
```



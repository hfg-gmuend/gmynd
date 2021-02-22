[Back to reference](../README.md)

### `sortData(data, props)`

Sorts a data array by the given property names (keys). The function modifies the data array and returns it. 
Give `props` as an array of strings or just as a string if you have just one property for sorting. By default, values will be sorted ascending. You can prefix any of the property names with `"-"` to reverse the order for this key.

If values are `undefined` the respective object will just stay in place and will not be sorted.

#### Example:

If you have data like this:
```javascript
let superheroes = [ 
  {Height:203, Weight:441, Name:"A-Bomb"},
  {Height:191, Weight:65, Name:"Abe Sapien"},
  {Height:185, Weight:90, Name:"Abin Sur"},
  {Height:203, Weight:441, Name:"Abomination"},
  {Height:193, Weight:122, Name:"Absorbing Man"},
  {Height:185, Weight:88, Name:"Adam Strange"},
  {Height:173, Weight:61, Name:"Agent 13"},
  {Height:178, Weight:81, Name:"Agent Bob"},
  {Height:191, Weight:104, Name:"Agent Zero"},
  {Height:188, Weight:108, Name:"Air-Walker"},
  ...
]
```

This will sort `superheroes` by ascending `Height` and descending `Weight`:
```javascript
gmynd.sortData(superheroes, ['Height', '-Weight']);
```

After that, the `superheroes` array will be sorted like this:
```javascript
[
  {Height:15.2, Weight:58, Name:"Utgard-Loki"},
  {Height:62.5, Weight:630, Name:"Giganta"},
  {Height:64, Weight:18, Name:"Krypto"},
  {Height:66, Weight:17, Name:"Yoda"},
  {Height:71, Weight:14, Name:"Jack-Jack"},
  {Height:79, Weight:18, Name:"Howard the Duck"},
  {Height:122, Weight:27, Name:"Dash"},
  {Height:122, Weight:25, Name:"Rocket Raccoon"},
  {Height:137, Weight:41, Name:"Violet Parr"},
  {Height:137, Weight:38, Name:"Robin V"},
  {Height:140, Weight:39, Name:"Wiz Kid"},
  {Height:142, Weight:45, Name:"Franklin Richards"},
  {Height:155, Weight:79, Name:"Jack of Hearts"},
  {Height:155, Weight:65, Name:"Lightning Lad"},
  {Height:155, Weight:50, Name:"X-23"},
  {Height:157, Weight:79, Name:"Penguin"},
  {Height:157, Weight:56, Name:"Spider-Man"},
  {Height:157, Weight:52, Name:"Buffy"},
  {Height:157, Weight:52, Name:"Flash IV"},
  {Height:157, Weight:50, Name:"Silverclaw"},
  ...
]
```

[Back to reference](../README.md)

### `arraySum(arr)`

Calculates the sum of all elements in an array of numbers `arr`. Doesn't work if any element in the array is not
castable as a Number (e.g. "2" is possible, "Hello" is not).

#### Example:

```javascript
let randomNumbers = [1, 3.3, 2, 7, -2];
let sum = gmynd.arraySum(randomNumbers);

// sum: 11.3
```
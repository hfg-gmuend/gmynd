[Back to reference](../README.md)

### `clip(val, min, max)`
Clips a value `val` to the given range from `min` to `max`. If `val` is lower than `min`, it is set to `min`, if `val` is higher than `max`, it is set to `max`.

#### Example:

```javascript
gmynd.clip(-1, 0, 10)   // 0
gmynd.clip(5, 0, 10)    // 5
gmynd.clip(100, 0, 10)  // 10
```


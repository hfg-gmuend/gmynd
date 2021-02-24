[Back to reference](../README.md)

### `isObject(value)`
Checks if `value` is of type Object and returns `true` if so, or `false` if not.

#### Examples:

```javascript
let result1 = gmynd.isObject( 270 );            // will return false 
let result2 = gmynd.isObject( "Hello!" );       // will return false 
let result3 = gmynd.isObject( ["a", "b"] );     // will return true (because arrays are also objects) 
let result4 = gmynd.isObject( {x:123, y:456} ); // will return true 
```


[Back to reference](../README.md)

### `isArray(value)`
Checks if `value` is of type Array and returns `true` if so, or `false` if not.

#### Examples:

```javascript
let result1 = gmynd.isArray( 270 );            // will return false 
let result2 = gmynd.isArray( "Hello!" );       // will return false 
let result3 = gmynd.isArray( ["a", "b"] );     // will return true 
let result4 = gmynd.isArray( {x:123, y:456} ); // will return false 
```


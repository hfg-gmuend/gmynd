[Back to reference](../README.md)

### `weekOfYear(date, returnYear = false)`

Returns the week number according to ISO-8601 of the given `date`'s year.

**Note:** The first week of the year is the week with January 4th in it. Weeks start on Monday.

#### Example1:
If you have a date like this:
```javascript
const date = new Date("2021-05-17");
```
This will calculate and give back the week number:

```javascript
let week = gmynd.weekOfYear(date);

// returns: 20
```

#### Example 2:
Let's take this precious date:
```javascript
const date = new Date("2021-01-01");
```
When you also need the year of the given week number, you can pass `true` for the `returnYear` parameter:
```javascript
let week = gmynd.weekOfYear(date, true);

// returns: Array [ 2020, 53 ]
```
Note that this date still belongs to the last week of the previous year.


credits to [RobG](https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php/6117889#6117889)
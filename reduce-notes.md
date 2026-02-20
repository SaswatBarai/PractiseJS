# JavaScript Array.reduce() Notes

## Summing Numbers
```javascript
const number = [1, 2, 3, 4];
const sum = number.reduce((acc, num) => {
    return acc + num;
});
console.log(sum); // 10
```
- `acc` starts as the first element, `num` as the second.
- Each step adds the next number to the accumulator.

## Flattening Nested Arrays
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => {
    return acc.concat(arr);
});
console.log(flat); // [1, 2, 3, 4, 5, 6]
```
- Use `concat` to merge arrays into a single flat array.

## Grouping Objects by Property
```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
const groupedByAge = people.reduce((acc, person) => {
    const key = person.age;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(person);
    return acc;
}, {});
```
- Start with an empty object as the accumulator (`{}`) to group items.
- Each person is added to an array keyed by their age.

## Notes
- The second argument to `reduce` sets the initial value of the accumulator.
- Useful for transforming arrays into sums, objects, or other structures.

saswat abdqbsdkjwdkqwkdn

# JavaScript: `null` vs `undefined`

## Overview
Both `null` and `undefined` represent the absence of a value, but they are used in different contexts and have distinct meanings.

## Key Differences

| Aspect | `undefined` | `null` |
|--------|-------------|--------|
| **Type** | `undefined` | `object` (this is a historical quirk) |
| **Assignment** | Automatic (uninitialized variables) | Must be explicitly assigned |
| **Meaning** | Variable declared but not assigned | Intentional absence of value |
| **Use Cases** | Missing properties, uninitialized vars | Empty objects, reset values |

## When Each Occurs

### `undefined` Occurs When:
- Variable declared but not assigned a value
- Accessing non-existent object properties
- Function parameters not provided
- Function returns nothing (implicit `undefined`)

### `null` Occurs When:
- Explicitly set to indicate "no value"
- Used to clear/reset object references
- Common in APIs to indicate missing data

## Examples

### Basic Declaration
```javascript
let a;              // undefined
let b = null;       // null
console.log(a);     // undefined
console.log(b);     // null
```

### Object Properties
```javascript
const obj = { name: 'Alice' };
console.log(obj.age);     // undefined (property doesn't exist)
console.log(obj.name);    // 'Alice'
```

### Function Parameters
```javascript
function greet(name) {
    console.log(name);    // undefined if no argument passed
}
greet();                 // undefined
```

### Function Returns
```javascript
function findUser(id) {
    // User not found
    return null;         // Explicit "no user"
}

function getData() {
    // No data to return
    // return undefined; // Implicit (same as no return statement)
}
```

## Type Checking

### Using `typeof`
```javascript
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (quirk!)
```

### Checking for `null` or `undefined`
```javascript
let value;

// Check for both
if (value == null) {
    console.log('Value is null or undefined');
}

// Strict equality
if (value === null) {
    console.log('Value is exactly null');
}

if (value === undefined) {
    console.log('Value is exactly undefined');
}
```

## Equality Comparisons

### Loose Equality (`==`)
```javascript
null == undefined;     // true
null == 0;            // false
undefined == 0;       // false
```

### Strict Equality (`===`)
```javascript
null === undefined;   // false (different types)
null === null;        // true
undefined === undefined; // true
```

## Best Practices

### When to Use `undefined`:
- Let JavaScript handle uninitialized variables
- When a property genuinely doesn't exist
- Default function parameter values (ES6+)

### When to Use `null`:
- To explicitly clear/reset a value
- API responses indicating "no data"
- Database queries returning no results
- JSON serialization (avoids `undefined` issues)

### Practical Example:
```javascript
// Good: Use null for intentional empty values
let selectedUser = null;

// Later...
selectedUser = { id: 1, name: 'Alice' };

// Reset
selectedUser = null;

// Bad: Don't assign undefined manually
let data = undefined;  // Unnecessary, just declare as let data;
```

## Common Pitfalls

1. **Typeof null**: `typeof null` returns `"object"` - this is a known JavaScript quirk
2. **JSON serialization**: `undefined` properties are omitted, `null` values are included
3. **Array holes**: Sparse arrays have `undefined` at empty indices
4. **Default parameters**: Use `undefined` checks for optional parameters

## Quick Reference
- Use `null` when you want to explicitly say "this has no value"
- Use `undefined` when something hasn't been initialized yet
- Always use `===` for comparisons to avoid type coercion issues
- Check for both with `value == null` if you want to catch both

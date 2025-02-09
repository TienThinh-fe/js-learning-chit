# Programming basics

- Data types
- Variables
- Operators
- Conditional statements
- Loops
- Functions
- Objects

# 1. Data types in JS

- Primitive data types
- Non-primitive data types

## 1.1 Primitive data types

- Number:

  - Integer: 1, 2, 3, 4, 5
  - Float: 1.1, 1.2, 1.3, 1.4
  - NaN: Not a number

- String: 'Hello', 'World'

  - '' "" **``**

- Boolean: true, false

  - Truthy values: 'abc', 123, true, ...
  - Falsy values: '', 0, false, undefined, null, NaN

- Null vs Undefined:

  - Null: Explicitly set a variable with no value
  - Undefined: Variable is declared but not assigned a value

- Symbol, BigInt

## 1.2 Non-primitive data types

- In JS, if the data type is not primitive, it is non-primitive - Object

- TBD

# 2. Variables

- 3 ways to declare a variable:

  - var
  - let => declare a mutable variable
  - const => declare an immutable variable - constant

- typeof operator

  - `typeof 1` => 'number'
  - `typeof 'Hello'` => 'string'
  - `typeof true` => 'boolean'
  - `typeof undefined` => 'undefined'
  - `typeof null` => 'object'

- Operators

  - Arithmetic operators: +, -, \*, /, %, ++, --
  - Assignment operators: =, +=, -=, \*=, /=, %=
  - Comparison operators: ==, ===, !=, !==, >, <, >=, <=
  - Logical operators: &&, ||, !
  - Bitwise operators: &, |, ^, ~, <<, >>
  - Conditional (ternary) operator: ?:

3. Conditional statements

- If statement
- If else statement
- If else if statement
- Switch case statement
- Ternary operator

```javascript
if (condition) {
  // code block
}

if (condition) {
  // code block
} else {
  // code block
}

if (condition) {
  // code block
} else if (condition) {
  // code block
} else {
  // code block
}

switch (expression) {
  case value1:
    // code block
    break
  case value2:
    // code block
    break
  default:
  // code block
}

condition ? expression1 : expression2
// example for ternary operator
let isAdult = age >= 18 ? 'Adult' : 'Child'
```

# 4. Loops

- For loop
- While loop
- Do while loop

```javascript
for (let i = 0; i < 10; i++) {
  // code block
}

while (condition) {
  // code block
}

do {
  // code block
} while (condition)
```

# 5. Functions in JS

```javascript
// 1. explicit function
function functionName(parameter1, parameter2) {
  console.log(parameter1, parameter2)

  return parameter1 + parameter2
}

const sum = functionName(1, 2) // log 1 2
console.log(sum) // 3

// 2. anonymous function - arrow function
const functionName = (parameter1, parameter2) => {
  console.log(parameter1, parameter2)

  return parameter1 + parameter2
}
```

- No return function is void function
- Return is optional
- Function can be assigned to a variable
- Function can be passed as an argument to another function

# 6. Objects

- Object:

  - Object with key-value pairs
  - Array
  - Function

- Object with key-value pairs

```javascript
const person = {
  name: 'Chit',
  age: 25,
  isAdult: true,
  isAvailable: null,
  love: function () {
    console.log('I love you')
  },
  hobbies: ['reading', 'coding', 'gaming'],
  address: {
    city: 'Yangon',
    country: 'Myanmar',
  },
}

// Access object properties
console.log(person.name) // Chit

// Access object properties using bracket notation
const a = 'name'
console.log(person.a) // Error => a is not a property of person
console.log(person[a]) // Chit => person['name']

// Access object properties using for in loop
for (let key in person) {
  console.log(key, person[key])
}

console.log(person.address.city) // Yangon
person.address.city = 'Mandalay'
console.log(person.address.city) // Mandalay

// call a function in object
person.love() // I love you
```

- Array
  - Array is a collection of elements
  - Index starts from 0
  - Array is an object

```javascript
const fruits = ['apple', 'banana', 'orange']

// get length of array
console.log(fruits.length) // 3

// access array elements by index
console.log(fruits[0]) // apple

// loop through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// add element to array
fruits.push('mango')
console.log(fruits) // ['apple', 'banana', 'orange', 'mango']
```

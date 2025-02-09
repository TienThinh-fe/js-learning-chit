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

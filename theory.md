# Programming basics

- Data types
- Variables
- Operators
- Conditional statements
- Loops
- Functions
- Objects

<details>
<summary>1. Data types in JS</summary>

- Primitive data types
- Non-primitive data types

### 1.1 Primitive data types

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

</details>

<details>
<summary>## 1.2 Non-primitive data types</summary>

- In JS, if the data type is not primitive, it is non-primitive - Object

- TBD

</details>

<details>
<summary>## 2. Variables</summary>

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

</details>

<details>
<summary>## 3. Conditional statements</summary>

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

</details>

<details>
<summary>## 4. Loops</summary>

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

</details>

<details>
<summary>## 5. Functions in JS</summary>

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

</details>

<details>
<summary>## 6. Objects</summary>

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

</details>

<details>
<summary>## 7. Deep dive into Array</summary>

### 7.1. Array methods

- Array is a collection of elements
- Array is an object
- Access elements: by index

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  console.log(fruits[0]) // apple
  ```

- Change elements value

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  fruits[0] = 'mango'
  console.log(fruits) // ['mango', 'banana', 'orange']
  console.log(fruits[0]) // mango
  ```

- length property

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  console.log(fruits.length) // 3
  ```

### 7.2. Array methods

- push

  - Add element to the end of the array

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  fruits.push('mango')
  console.log(fruits) // ['apple', 'banana', 'orange', 'mango']
  ```

- toString

  - Convert array to string

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  console.log(fruits.toString()) // 'apple,banana,orange'
  ```

- pop

  - Remove the last element from the array

  ```javascript
  const fruits = ['apple', 'banana', 'orange']

  fruits.pop()
  console.log(fruits) // ['apple', 'banana']
  ```

- concat

  - Merge two or more arrays

  ```javascript
  const fruits = ['apple', 'banana']
  const vegetables = ['carrot', 'cabbage']

  const food = fruits.concat(vegetables)
  console.log(food) // ['apple', 'banana', 'carrot', 'cabbage']
  ```

- slice

  - Extract a part of an array
  - slice(start, end?)
  - end is exclusive

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  const citrus = fruits.slice(1, 3)
  console.log(citrus) // ['banana', 'orange']

  const from1ToEnd = fruits.slice(1)
  console.log(from1ToEnd) // ['banana', 'orange', 'mango']
  ```

- splice

  - Add or remove elements from an array
  - splice(start, deleteCount, itemToAdd1, itemToAdd2, ...)

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  fruits.splice(1, 2, 'grape', 'kiwi')
  console.log(fruits) // ['apple', 'grape', 'kiwi', 'mango']
  ```

- forEach

  - Loop through each element in an array

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  // this is callback function
  fruits.forEach((fruit) => {
    console.log(fruit)
  })
  ```

### 7.3. Array search

- indexOf

  - Find the index of an element in an array
  - Return -1 if not found

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  console.log(fruits.indexOf('banana')) // 1
  console.log(fruits.indexOf('grape')) // -1
  ```

- includes

  - Check if an element is in an array
  - Return true or false

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  console.log(fruits.includes('banana')) // true
  console.log(fruits.includes('grape')) // false
  ```

- find

  - Find the **first** element that satisfies the condition
  - Return undefined if not found

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  const result = fruits.find((fruit) => fruit === 'banana')
  console.log(result) // banana

  const notFound = fruits.find((fruit) => fruit === 'grape')
  console.log(notFound) // undefined
  ```

- filter

  - Find all elements that satisfy the condition
  - Return an empty array if not found

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  const result = fruits.filter((fruit) => fruit.includes('a'))
  console.log(result) // ['apple', 'banana', 'mango']

  const notFound = fruits.filter((fruit) => fruit.includes('z'))
  console.log(notFound) // []
  ```

### 7.4. Array sort

- sort

  - Sort elements in an array
  - sort(sortFunction?)
  - sortFunction: compare function
  - If compare function is not provided, sort elements as strings
  - compare string in JS: <https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/>

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'mango']

  fruits.sort()
  console.log(fruits) // ['apple', 'banana', 'mango', 'orange']

  const nums = [1, 10, 2, 20, 3]

  nums.sort()
  console.log(nums) // [1, 10, 2, 20, 3]

  // compare function to sort numbers in ascending order
  function compare(a, b) {
    return a - b
  }
  nums.sort(compare)
  console.log(nums) // [1, 2, 3, 10, 20]
  ```

  - this can be used to sort the array of objects

  ```javascript
  const persons = [
    { name: 'Chit', age: 25 },
    { name: 'Nhung', age: 30 },
    { name: 'Bim', age: 20 },
  ]

  // sort by name
  persons.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  console.log(persons)

  // sort by age
  persons.sort((a, b) => a.age - b.age)
  console.log(persons)
  ```

</details>

# What is an object in JS?

- Collection of key-value pairs
- Key is a string (or Symbol)
- Value can be any data type (primitive or object nested)
- A key can be 2 letters combined (ensure that this is a string, e.g. "a b")

```javascript
const obj = {
  a: 1, // key is 'a', value is 1
  'a b': 2, // key is 'a b', value is 2
}
```

# How to access an key-value pair in an object?

### Dot Notation

- `obj.key`
- key must be a letter (cannot be 2 letters combined (e.g. "a b") or a number (e.g. "1"))
- if the key is not in the object, it will return `undefined`

```javascript
const obj = {
  a: 1,
  b: 2,
  'a b': 3,
}

console.log(obj.a) // 1
console.log(obj.b) // 2
console.log(obj.c) // undefined
// console.log(obj.a b) // SyntaxError: Unexpected token 'b'

// `a` `b` or `c` here are not variables, they are keys in the object (just a string)
```

### Bracket Notation

- `obj['key']`
- key can be any string (including 2 letters combined (e.g. "a b") or a number (e.g. "1"))
- if the key is not in the object, it will return `undefined`
- you can use a variable as a key or put a hardcoded string

```javascript
const obj = {
  a: 1,
  b: 2,
  'a b': 3,
}

console.log(obj['a']) // 1
console.log(obj['b']) // 2
console.log(obj['c']) // undefined
console.log(obj['a b']) // 3

const keyOfObjectAsAnVariable = 'a b'
// key is a variable, not a string
// this line equal with obj['a b']
console.log(obj[keyOfObjectAsAnVariable]) // 3

// need to distinguish between a variable and a string
// console.log(obj[a]) // ReferenceError: a is not defined => you pass an variable `a` which is not defined
```

# Nested Object

- An object can contain another object as a value
- You can access the nested object using dot notation or bracket notation
- You can also use a variable as a key to access the nested object

```javascript
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
}

console.log(obj.c.d) // 3
console.log(obj['c']['d']) // 3
console.log(obj.c['d']) // 3

const keyOfObjectAsAnVariable = 'c'
// key is a variable, not a string
// this line equal with obj['c']['d']
console.log(obj[keyOfObjectAsAnVariable]['d']) // 3
```

# Function in Object

- An object can contain a function as a value
- You can access the function using dot notation or bracket notation

- 3 ways to define a function in an object:
  - `functionName: function() {}`
  - `functionName() {}`
  - `functionName: () => {}`

```javascript
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: function () {
    console.log('f')
  },
  g() {
    console.log('g')
  },
  h: () => {
    console.log('h')
  },
}

console.log(obj.f()) // f
console.log(obj.g()) // g
console.log(obj.h()) // h
```

# This keyword in Object

- `this` keyword refers to the object itself
- You can use `this` keyword to access the properties and methods of the object
- `this` keyword should be used inside a function (arrow function will not work as the object itself)

```javascript
const obj = {
  a: 1,
  b: 2,
  show() {
    console.log(this.a) // 1
    console.log(this.b) // 2
  },
  c: {
    d: 3,
    e: 4,
    f: function () {
      console.log(this.d) // 3
    },
    g() {
      console.log(this.e) // 4
    },
    h: () => {
      console.log(this.f) // undefined
    },
  },
}

obj.show() // 1 2

obj.c.f() // 3
obj.c.g() // 4
obj.c.h() // undefined
```

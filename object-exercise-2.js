// OBJECT EXERCISE 2

// Exercise 1:
// This below code has an error
// Please fix the error

// TODO: uncomment the code below before running
// const person = {
//   name: 'John',
//   age: 25,
// }

// person = {
//   name: 'Jane',
//   age: 30,
// }

// console.log(person.name) // Output: Jane

// Exercise 2:
// This below code has an error
// Please fix the error

// TODO: uncomment the code below before running
// const person = {
//   name: 'John',
//   age: 25,
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`)
//   },
// }

// person.greet() // Output: Hello, my name is undefined => it should be 'John'

// Exercise 3:
// This below code has an error
// Please fix the error

// const obj = {
//   key1: 'value1',
//   'key 2': 'value 2'
// }

// const k1 = 'key1'
// const k2 = 'key 2'

// console.log(obj[key1]) // ReferenceError: key1 is not defined => please fix to log 'value1' to the console
// console.log(obj['k2']) // undefined => please fix to log 'value 2' to the console
// console.log(obj.k2) // undefined => please fix to log 'value 2' to the console
// console.log(obj.k1) // undefined => please fix to log 'value1' to the console

// Exercise 4:
// This below code has an error
// Please fix the error

// const student = {
//   name: 'John',
//   age: 20,
//   subjects: ['Math', 'Science', 'History'],
//   getDetails: () => {
//     return `${this.name} is ${
//       this.age
//     } years old and studies ${this.subjects.join(', ')}.`
//   },
// }

// console.log(student.getDetails()) // Error => it should be 'John is 20 years old and studies Math, Science, History.'

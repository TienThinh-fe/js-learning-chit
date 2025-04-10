// OBJECT EXERCISE

// Exercise 1: Create an object called `car` that has the following properties, the value can be anything you want:
// - `make`: a string representing the car's make
// - `model`: a string representing the car's model
// - `year`: a number representing the car's year
// - `color`: a string representing the car's color
// - `isRunning`: a boolean indicating whether the car is currently running
// - `start`: a method that sets `isRunning` to true
// - `stop`: a method that sets `isRunning` to fal

// write you code here
const car = {
  make: 'Bom',
  model: 'Bim',
  year: 2025,
  color: 'red',
  isRunning: true,
  start: function () {
    this.isRunning = true
  },
  stop: function () {
    this.isRunning = false
  },
}

// console.log(car)
// car.stop()
// console.log(car.isRunning)
// car.start()
// console.log(car.isRunning)
// hint:
// - use this keyword to refer to the object itself

// Exercise 2: Create an object called `person` that has the following properties
// - `name`: a string representing the person's name
// - `age`: a number representing the person's age
// - 'street`: a string representing the person's street address
// - `city`: a string representing the person's city
// - `country`: a string representing the person's country
// - `address`: a method that returns the person's full address in the format "street, city, country"
// - `greet`: a method that returns a greeting message in the format "Hello, my name is [name] and I am [age] years old."
// It should be a object constructor that takes `name`, `age`, `street`, `city`, and `country` as parameters and initializes the properties accordingly.

// write you code here
function Person(name, age, street, city, country) {
  this.name = name
  this.age = age
  this.street = street
  this.city = city
  this.country = country
  this.address = function () {
    return `${this.street}, ${this.city}, ${this.country}`
  }
  this.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
const myPerson = new Person('Bim', 40, 'Hoang Dinh Ai', 'Da Nang', 'VietNam')
// console.log(myPerson.address())
// console.log(myPerson.greet())

// hint:
// - use this keyword to refer to the object itself
// - https://www.w3schools.com/js/js_object_constructors.asp

// Exercise 3: write a function that take a person object
// This function should return uppercase name and age + 1
// - `name`: a string representing the person's name
// - `age`: a number representing the person's age

// write you code here
// @param {Object} person - The person object
// @param {string} person.name - The person's name
// @param {number} person.age - The person's age
function uppercaseNameAndAge(person) {
  const obj = {}
  obj.name = person.name.toUpperCase()
  obj.age = person.age + 1
  return obj
}

// test cases for exercise 3
const person1 = {
  name: 'John',
  age: 25,
}

const person2 = {
  name: 'Jane',
  age: 30,
}

// console.log(uppercaseNameAndAge(person1)) // Output: { name: 'JOHN', age: 26 }
// console.log(uppercaseNameAndAge(person2)) // Output: { name: 'JANE', age: 31 }

// hint:
// - object is passed by reference

// Exercise 4: write a function takes an array of person and company objects
// This function should return an array of objects with the following properties:
// - `name`: the name of the person
// - `age`: the age of the person
// - `company`: the name of the company
// assuming that the person object has a property called `companyId` that corresponds to the `id` of the company object

function mapPersonToCompany(persons, companies) {
  return persons.map((person) => {
    const foundCompany = companies.find((company) => {
      return company.id === person.companyId
    })
    // console.log(foundCompany)

    return {
      name: person.name,
      age: person.age,
      company: foundCompany.name,
    }
  })
}

// test cases for exercise 4
const persons = [
  { name: 'John', age: 25, companyId: 1 },
  { name: 'Jane', age: 30, companyId: 2 },
  { name: 'Bob', age: 35, companyId: 1 },
]

const companies = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' },
]

const foundCompany = companies.find((company) => {
  return (company.id = 1)
})

const result = mapPersonToCompany(persons, companies)
console.log(result)
// Output:
// [
//   { name: 'John', age: 25, company: 'Company A' },
//   { name: 'Jane', age: 30, company: 'Company B' },
//   { name: 'Bob', age: 35, company: 'Company A' },
// ]

// hint:
// - use map and find methods
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

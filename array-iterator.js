// Exercise 1: create a function that takes an array and a number, and returns the array that multiplied by the number

function multiplyArray(arr, num) {
  // write your code here
}

// Test cases for Exercise 1
console.log(multiplyArray([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplyArray([1, 2, 3], 3)) // [3, 6, 9]
console.log(multiplyArray([1, 2, 3], 4)) // [4, 8, 12]
console.log(multiplyArray([3, 4, 5], 2)) // [6, 8, 10]

// Hint for Exercise 1:
// You can use the map method to iterate over the array and multiply each element by the number

// Exercise 2: create a function that takes an array of numbers, and a number
// filter the negative numbers
// map the positive numbers to be multiplied by the number
// return the array

function filterAndMultiply(arr, num) {
  // write your code here
}

// Test cases for Exercise 2
console.log(filterAndMultiply([1, -2, 3], 2)) // [2, 6]
console.log(filterAndMultiply([-1, -2, -3], 2)) // []
console.log(filterAndMultiply([-1, 2, 3], 2)) // [4, 6]
console.log(filterAndMultiply([1, 2, 3], 2)) // [2, 4, 6]

// Hint for Exercise 2:
// You can use the filter() method to filter the negative numbers
// and the map() method to multiply the positive numbers by the number

// Exercise 3: create a function that takes an array of objects students, and a number
// filter the students who have a grade less than the number

function filterBadStudents(students, grade) {
  // write your code here
}

// Test cases for Exercise 3
console.log(
  filterBadStudents(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    70,
  ),
) // [{name: 'Bob', grade: 60}]
console.log(
  filterBadStudents(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    80,
  ),
) // [{name: 'Bob', grade: 60}]
console.log(
  filterBadStudents(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    50,
  ),
) // [{name: 'Alice', grade: 90}, {name: 'Bob', grade: 60}]
console.log(
  filterBadStudents(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    40,
  ),
) // [{name: 'Alice', grade: 90}, {name: 'Bob', grade: 60}]
console.log(
  filterBadStudents(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    100,
  ),
) // []

// Hint for Exercise 3:
// You can use the filter() method to filter the students who have a grade less than the number
// Use dot notation to access the grade property of each student object (e.g. student.grade)

// Exercise 4: create a function that takes an array of objects students, and a number
// check if every student has a grade greater than the number

function checkIsEveryStudentGood(students, grade) {
  // write your code here
}

// Test cases for Exercise 4
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    70,
  ),
) // false
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    60,
  ),
) // false
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    50,
  ),
) // false
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    40,
  ),
) // false
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    100,
  ),
) // true
console.log(
  checkIsEveryStudentGood(
    [
      { name: 'Alice', grade: 90 },
      { name: 'Bob', grade: 60 },
    ],
    0,
  ),
) // true

// Hint for Exercise 4:
// You can use the every() method to check if every student has a grade greater than the number
// Use dot notation to access the grade property of each student object (e.g. student.grade)

// Exercise 5: create a function that takes an array of objects employees, and a string of name
// find first employee who includes the string of name
// return the employee object

function findEmployeeByName(employees, name) {
  // write your code here
}

// Test cases for Exercise 5
console.log(
  findEmployeeByName(
    [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 40 },
    ],
    'Alice',
  ),
) // {name: 'Alice', age: 30}
console.log(
  findEmployeeByName(
    [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 40 },
    ],
    'Bob',
  ),
) // {name: 'Bob', age: 40}
console.log(
  findEmployeeByName(
    [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 40 },
    ],
    'Charlie',
  ),
) // null
console.log(
  findEmployeeByName(
    [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 40 },
    ],
    'A',
  ),
) // {name: 'Alice', age: 30}

// Hint for Exercise 5:
// You can use the find() method to find the first employee who includes the string of name
// Use dot notation to access the name property of each employee object (e.g. employee.name)
// Use the includes() method to check if the name includes the string of name
// If the name includes the string of name, return the employee object
// Otherwise, return null

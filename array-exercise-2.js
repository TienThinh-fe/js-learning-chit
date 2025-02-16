// ARRAY EXERCISE 2

// Exercise 1
// Write a function use map to return an array of the square of each number in the array.

console.log('===== Exercise 1 =====')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// write your function here

// log the result
// result should be [1, 4, 9, 16, 25, 36, 49, 64, 81]

console.log('===== End of Exercise 1 =====')

// Exercise 2
// Write a function that takes an array and a number, return an array of the number multiplied by each element in the array.

console.log('===== Exercise 2 =====')

const array2 = [1, 3, 9, 2, 3, 4, 5, 8]

// write your function here

// log the result
// call the function with array2 and 3, result should be [3, 9, 27, 6, 9, 12, 15, 24]

console.log('===== End of Exercise 2 =====')

// Exercise 3
// Write a function that takes an array of object person
// return an array of the name of each person who is older than 18 years old.
// others who are younger than 18 should be return undefined.
// after that, use filter to remove the undefined from the array.

console.log('===== Exercise 3 =====')

const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 15 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 10 },
]

// write your function here

// log the result
// result should be ['Alice', 'Charlie', 'David']

console.log('===== End of Exercise 3 =====')

/* ========================= HINTS =========================
Exercise 1
- use map() to return a new array
- for each element in the array, return the square of the element

Exercise 2
- use map() to return a new array
- for each element in the array, return the element multiplied by the number

Exercise 3
- use map() to return a new array
- for each person, check if the age is older than 18
- if yes, return the name
- if no, return undefined
- use filter() to remove the undefined from the array

========================================================= */

/* ========================= SAMPLE CODE =========================
// Exercise 1
function squareArray(arr) {
  return arr.map((element) => {
    return element * element;
  });
}

// Exercise 2
function multiplyArray(arr, num) {
  return arr.map((element) => {
    return element * num;
  });
}

// Exercise 3
function filterOverEighteen(arr) {
  return arr.map((person) => {
    if (person.age > 18) {
      return person.name;
    } else {
      return undefined;
    }
  }).filter((name) => {
    return name !== undefined;
  });
}

function filterOverEighteen(arr) {
  return arr.filter((person) => {
    return person.age > 18;
  }).map((person) => {
    return person.name;
  });
}

========================================================= */

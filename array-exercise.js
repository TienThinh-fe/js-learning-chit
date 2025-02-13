// ARRAY EXERCISES

// Exercise 1
// Write a function that takes an array of numbers and returns the sum of all the odd numbers in the array.

console.log('===== Exercise 1 =====')
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// write your function here
const sumOdd = (arr)=> {
  let result = 0;
  arr.forEach((element) => {
    if (element % 2 !== 0){
      result += element;
    }
  }) 
  return (result);
}
// log the result
console.log(sumOdd(array));
// result should be 25

console.log('===== End of Exercise 1 =====')

// Exercise 2
// Write a function that takes an array, find the index of the max value and return the index.

console.log('===== Exercise 2 =====')

const array2 = [1, 3, 9, 2, 3, 4, 5, 8]

// write your function here
const findIndexOfMaxValue = (arr)=>{
  let currentMaxValue = arr[0];
  let currentMaxIndex = 0;
  arr.forEach((element,index)=> {
    if(element > currentMaxValue){
      currentMaxValue = element;
      currentMaxIndex = index;
    }
  })
  return {currentMaxValue:currentMaxValue,currentMaxIndex:currentMaxIndex}
}
// log the result
console.log(findIndexOfMaxValue(array2));
// result should be 2 (index of 9)

console.log('===== End of Exercise 2 =====')

// Exercise 3
// Write a function that takes an array of object person, filter out the person who is older than 18 years old.

console.log('===== Exercise 3 =====')

const people = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 15 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 10 },
]

// write your function here
const filterOverEightteen = (arr)=>{

  return arr.filter((obj)=>{
 return (obj.age > 18)
  })

}
// log the result
console.log(filterOverEightteen(people));
// result should be [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 25 }, { name: 'David', age: 30 }]

console.log('===== End of Exercise 3 =====')

// Exercise 4
// Write a function that takes an array of object student, sort the student by their score in descending order.

console.log('===== Exercise 4 =====')

const students = [
  { name: 'Alice', score: 90 },
  { name: 'Bob', score: 85 },
  { name: 'Charlie', score: 95 },
  { name: 'David', score: 80 },
  { name: 'Eve', score: 100 },
]

// write your function here
const sortByScoreInDesc = (arr)=>{
  return arr.sort((a,b)=>{
return b.score - a.score;
  })
}
// log the result
console.log(sortByScoreInDesc(students));
// result should be [{ name: 'Eve', score: 100 }, { name: 'Charlie', score: 95 }, { name: 'Alice', score: 90 }, { name: 'Bob', score: 85 }, { name: 'David', score: 80 }]

console.log('===== End of Exercise 4 =====')

// Exercise 5
// Write a function that takes an array of object student, return true if all students have a score greater than 50, otherwise return false.

console.log('===== Exercise 5 =====')

const students2 = [
  { name: 'Alice', score: 90 },
  { name: 'Bob', score: 85 },
  { name: 'Charlie', score: 95 },
  { name: 'David', score: 80 },
  { name: 'Eve', score: 51 },
]

const students3 = [
  { name: 'Alice', score: 30 },
  { name: 'Bob', score: 85 },
  { name: 'Charlie', score: 95 },
  { name: 'David', score: 80 },
  { name: 'Eve', score: 40 },
]

// write your function here
  const everyStudentAbove50 = (arr)=>{
   return arr.every((student)=>{
      return (student.score > 50);
    })
  }
// log the result
console.log(everyStudentAbove50(students2));
console.log(everyStudentAbove50(students3));

// result should be true for students2 and false for students3

/* ========================= HINTS =========================

Exercise 1
- Way 1: 
  - Create a variable to store the sum.
  - Use for loop to iterate through the array and check if the number is odd or not.
  - If it is odd, add it to the sum.
  - Return the sum.

- Way 2:
  - Use filter to filter out the odd numbers.
  - Use reduce to sum the numbers.

Exercise 2
- Create a variable to store the max value, and a variable to store the index.
- Use for loop to iterate through the array.
- Check if the current value is greater than the max value, if yes, update the max value and index.
- Return the index.


Exercise 3
- Use .filter() to filter out the person who is older than 18 years old.

Exercise 4
- Use .sort() to sort the student by their score in descending order.
- the sort function takes two arguments, a and b, which are two elements are adjacent in the array.
- if the return value is negative, a will be placed before b.
- if the return value is positive, b will be placed before a.
- if the return value is 0, a and b will remain unchanged.
- To sort in descending order, you can return b.score - a.score.

Exercise 5
Way 1:
- Use .find() to check if there is any student who has a score less than 50.
- find() takes 1 argument, a function that returns true or false.
- If the function returns true, find() will return the first element that satisfies the condition.
- If the function returns false, find() will return undefined. (not found)

Way 2:
- Use .every() to check if all students have a score greater than 50.
- every() takes 1 argument, a function that returns true or false.
- If the function returns true for all elements, every() will return true.
- If the function returns false for any element, every() will return false.
*/

/* ========================= SAMPLE CODE =========================

// Exercise 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOddNumbers(array)); // 25

// Exercise 2
const array2 = [1, 3, 9, 2, 3, 4, 5, 8]

function findMaxIndex(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(findMaxIndex(array2)); // 2

// Exercise 3
const people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 10 }
]

function filterPeople(arr) {
    return arr.filter(person => person.age > 18);
}

console.log(filterPeople(people));

// Exercise 4
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 },
    { name: 'David', score: 80 },
    { name: 'Eve', score: 100 }
]

function sortStudents(arr) {
    return arr.sort((first, second) => {
      const score1 = first.score;
      const score2 = second.score;

      if (score1 > score2) {
        return -1;
      } else if (score1 < score2) {
        return 1;
      } else {
        return 0;
      }
  });
}

console.log(sortStudents(students));


// Exercise 5
const students2 = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 },
    { name: 'David', score: 80 },
    { name: 'Eve', score: 51 }
]

const students3 = [
    { name: 'Alice', score: 30 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 },
    { name: 'David', score: 80 },
    { name: 'Eve', score: 40 }
]

function allScoreGreaterThan50(arr) {
    return arr.every(student => student.score > 50);
}

console.log(allScoreGreaterThan50(students2)); // true

console.log(allScoreGreaterThan50(students3)); // false

function anyScoreLessThan50(arr) {
    return arr.find(student => student.score < 50) !== undefined;
}

console.log(anyScoreLessThan50(students2)); // false

console.log(anyScoreLessThan50(students3)); // true
*/

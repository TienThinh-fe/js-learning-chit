const students = [
  { name: 'Nhung', age: 18 },
  { name: 'AAAAQsd', age: 12 },
  { name: 'Thinh', age: 65 },
  { name: 'Bim', age: 99 },
]
const newStudents = students.sort((first, second) => {
  return first.age - second.age
})
console.log(newStudents)

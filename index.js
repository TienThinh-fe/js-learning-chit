const person1 = {
  name: 'Nhung',
  age: 25
}

const person2 = {
  name: 'Thinh',
  age: 52,
}

const person3 = {
  name: 'Bim',
  age: 51,
}

const arr = [person1, person2, person3]

let currentMinAge = 100;
let minAgeName = ''

for (let i = 0; i < arr.length; i++){
  const person = arr[i]
  if (person.age < currentMinAge) {
    currentMinAge = person.age;
    minAgeName = person.name;
  }
}
console.log(minAgeName);

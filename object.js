const person = {
  name: 'bim',
  age: 24,
  greet: function () {
    console.log(
      `Hello I am ${this.name} and my age is ${this.age}. My girlfriend is ${this.girlfriend.name}`,
    )
    return 'bimbim'
  },
  getInfo: () => {
    console.log(this)
    console.log('Get Info')
  },
  girlfriend: {
    name: 'chit',
    age: 30,
  },
}

const key = 'name'
console.log(
  `My girlfriend is ${person.girlfriend.name} and her age is ${person.girlfriend.age}`,
)
console.log(person[key])
console.log(person['age'])
console.log(person.greet())
person.getInfo()
person.name = 'bimbim'
person.age = 32
console.log(person.name)
console.log(person.age)
person.getInfo = (title) => {
  console.log(`My title is ${title}`)
}
person.getInfo('Mr')

// Constructor
const createPerson = (name, age) => {
  const obj = {}
  obj.name = name
  obj.age = age
  return obj
}
const firstPerson = createPerson('bim', 35)
console.log(firstPerson)
const createPerson2 = (name, age, nameKey, ageKey) => {
  const obj = {};
  obj[nameKey] = name;
  obj[ageKey] = age;
  return obj;
}
const secondPerson = createPerson2('chit', 10, 'ag', 'ageK')
console.log(secondPerson)

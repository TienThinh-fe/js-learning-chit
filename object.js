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
// console.log(
//   `My girlfriend is ${person.girlfriend.name} and her age is ${person.girlfriend.age}`,
// )
// console.log(person[key])
// console.log(person['age'])
// console.log(person.greet())
// person.getInfo()
person.name = 'bimbim'
person.age = 32
// console.log(person.name)
// console.log(person.age)
person.getInfo = (title) => {
  console.log(`My title is ${title}`)
}
// person.getInfo('Mr')

// Constructor
const createPerson = (name, age) => {
  const obj = {}
  obj.name = name
  obj.age = age
  return obj
}
const firstPerson = createPerson('bim', 35)
// console.log(firstPerson)
const createPerson2 = (name, age, nameKey, ageKey) => {
  const obj = {}
  obj[nameKey] = name
  obj[ageKey] = age
  return obj
}
const secondPerson = createPerson2('chit', 10, 'ag', 'ageK')
// console.log(secondPerson)

const functionChangeArray = (arr) => {
  arr.push(4)
}

const changeString = (string) => {
  string = 'Hello'
}

const a = [1, 2, 3]
console.log('before', a)
functionChangeArray(a)
console.log('after', a)

let b = 'world'
console.log('before', b)
changeString(b)
console.log('after', b)

console.log('-----')

const personObj = {
  name: 'Nhung',
  age: 12,
  address: 'QN',
}

for (let key in personObj) {
  console.log(key)
  console.log(personObj[key])
}

const personArr = [
  {
    name: 'Nhung',
    age: 12,
    address: 'QN',
  },
  {
    name: 'Bim',
    age: 24,
    address: 'HN',
  },
]

// console.log(personArr[0])

for (let a in personArr) {
  console.log(personArr[a])
}

for (let b of personArr) {
  console.log(b.name)
}

const o = {
  abc: 'b',
  'abc cbd': 'c',
  fun() {
    console.log(1)
  },
}

o.fun()
o['fun']()

// const key1 = 'abc'
// const bim = 'abc cbd',

// console.log(o['abc'])
// console.log(o[bim])
// console.log(o[abc])

// const char = 'a'

// console.log('a')
// console.log(char)
// console.log(a)

// // console.log(o.abc)

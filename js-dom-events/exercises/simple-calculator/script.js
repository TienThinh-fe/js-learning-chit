const firstNumberInput = document.getElementById('firstNumber')
const secondNumberInput = document.getElementById('secondNumber')

const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const multipleBtn = document.getElementById('multiple')
const divideBtn = document.getElementById('divide')

const clearBtn = document.getElementById('clear')

const resultElement = document.getElementById('result')

const getNumber = () => {
  const firstNumber = Number(firstNumberInput.value)
  const secondNumber = Number(secondNumberInput.value)

  return {
    first: firstNumber,
    second: secondNumber,
  }
}

const displayResult = (result) => {
  if (result % 1 === 0) {
    resultElement.innerText = result
    return
  }
  resultElement.innerText = result.toFixed(2)
}

addBtn.addEventListener('click', function () {
  const { first, second } = getNumber()
  const sum = first + second
  displayResult(sum)
})

subtractBtn.addEventListener('click', function () {
  const { first, second } = getNumber()
  const subtract = first - second
  displayResult(subtract)
})

multipleBtn.addEventListener('click', function () {
  const { first, second } = getNumber()
  const multiple = first * second
  displayResult(multiple)
})

divideBtn.addEventListener('click', function () {
  const { first, second } = getNumber()
  if (second === 0) {
    resultElement.innerText = 'Cannot divide by Zero!'
    return
  }
  const divide = first / second
  displayResult(divide)
})

clearBtn.addEventListener('click', function () {
  firstNumberInput.value = ''
  secondNumberInput.value = ''
  resultElement.innerText = ''
})

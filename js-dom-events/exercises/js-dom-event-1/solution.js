// Simple Calculator - Solution with Detailed Explanations
// This file contains the complete solution for the DOM Events exercise

// STEP 1: Getting references to DOM elements
// We use document.getElementById() to get references to all elements we need to work with
const firstNumberInput = document.getElementById('firstNumber')
const secondNumberInput = document.getElementById('secondNumber')
const addBtn = document.getElementById('addBtn')
const subtractBtn = document.getElementById('subtractBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const divideBtn = document.getElementById('divideBtn')
const resultDisplay = document.getElementById('result')

// STEP 2: Function to get values from input fields
// This function safely gets the values from both input fields and converts them to numbers
function getInputValues() {
  // Get the values from the input fields
  const firstValue = firstNumberInput.value
  const secondValue = secondNumberInput.value

  // Convert to numbers, using 0 as default for empty inputs
  // parseFloat() converts string to number, but we also handle empty strings
  const num1 = firstValue === '' ? 0 : parseFloat(firstValue)
  const num2 = secondValue === '' ? 0 : parseFloat(secondValue)

  // Return an object containing both numbers
  return {
    first: num1,
    second: num2,
  }
}

// STEP 3: Function to display the result
// This function updates the result display with proper formatting
function displayResult(result) {
  // Check if the result is a valid number
  if (isNaN(result)) {
    resultDisplay.innerText = 'Error: Invalid calculation'
    return
  }

  // Round to 2 decimal places for cleaner display
  // We use Number() to remove unnecessary trailing zeros
  const formattedResult = Number(result.toFixed(2))
  resultDisplay.innerText = formattedResult
}

// STEP 4: Calculation functions
// Each function performs a specific mathematical operation

function addNumbers(num1, num2) {
  // Simple addition
  return num1 + num2
}

function subtractNumbers(num1, num2) {
  // Simple subtraction
  return num1 - num2
}

function multiplyNumbers(num1, num2) {
  // Simple multiplication
  return num1 * num2
}

function divideNumbers(num1, num2) {
  // Division with zero-check
  if (num2 === 0) {
    // Return a special value to indicate division by zero
    return Infinity
  }
  return num1 / num2
}

// STEP 5: Input validation function (BONUS)
// This function checks if the inputs contain valid numbers
function validateInputs() {
  const firstValue = firstNumberInput.value
  const secondValue = secondNumberInput.value

  // Check if either input is not a number (and not empty)
  if (
    (firstValue !== '' && isNaN(firstValue)) ||
    (secondValue !== '' && isNaN(secondValue))
  ) {
    displayResult(NaN) // This will show an error message
    return false
  }
  return true
}

// STEP 6: Event listeners for buttons
// We add click event listeners to each operation button

addBtn.addEventListener('click', function () {
  // First validate the inputs
  if (!validateInputs()) return

  // Get the input values
  const values = getInputValues()

  // Perform the calculation
  const result = addNumbers(values.first, values.second)

  // Display the result
  displayResult(result)
})

subtractBtn.addEventListener('click', function () {
  if (!validateInputs()) return
  const values = getInputValues()
  const result = subtractNumbers(values.first, values.second)
  displayResult(result)
})

multiplyBtn.addEventListener('click', function () {
  if (!validateInputs()) return
  const values = getInputValues()
  const result = multiplyNumbers(values.first, values.second)
  displayResult(result)
})

divideBtn.addEventListener('click', function () {
  if (!validateInputs()) return
  const values = getInputValues()
  const result = divideNumbers(values.first, values.second)

  // Special handling for division by zero
  if (result === Infinity) {
    resultDisplay.textContent = 'Error: Cannot divide by zero'
  } else {
    displayResult(result)
  }
})

// STEP 7: Keyboard support (BONUS)
// This allows users to press Enter to trigger calculations

let lastOperation = null // Keep track of the last operation used

// Function to perform the last operation
function performLastOperation() {
  if (!lastOperation) {
    resultDisplay.textContent = 'Click an operation button first'
    return
  }

  if (!validateInputs()) return
  const values = getInputValues()
  let result

  switch (lastOperation) {
    case 'add':
      result = addNumbers(values.first, values.second)
      break
    case 'subtract':
      result = subtractNumbers(values.first, values.second)
      break
    case 'multiply':
      result = multiplyNumbers(values.first, values.second)
      break
    case 'divide':
      result = divideNumbers(values.first, values.second)
      if (result === Infinity) {
        resultDisplay.textContent = 'Error: Cannot divide by zero'
        return
      }
      break
  }

  displayResult(result)
}

// Update the button event listeners to track the last operation
addBtn.addEventListener('click', function () {
  lastOperation = 'add'
  // ... rest of the function stays the same
})

// Add Enter key support to input fields
firstNumberInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    performLastOperation()
  }
})

secondNumberInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    performLastOperation()
  }
})

// EXPLANATION OF KEY CONCEPTS:

/*
1. DOM Element Selection:
   - document.getElementById() gets elements by their unique ID
   - Always store references in variables for reuse

2. Event Listeners:
   - addEventListener() is the modern way to handle events
   - First parameter is the event type ('click', 'keypress', etc.)
   - Second parameter is the function to execute

3. Input Validation:
   - Always validate user input before processing
   - Use isNaN() to check if a value is not a number
   - Handle edge cases like empty inputs and division by zero

4. Function Organization:
   - Break code into small, focused functions
   - Each function should have a single responsibility
   - Use descriptive function names

5. Error Handling:
   - Anticipate what could go wrong (division by zero, invalid input)
   - Provide helpful error messages to users
   - Use defensive programming techniques

6. User Experience:
   - Format numbers nicely (remove unnecessary decimals)
   - Provide immediate feedback
   - Support multiple interaction methods (mouse and keyboard)
*/

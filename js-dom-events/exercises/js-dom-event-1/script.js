// Simple Calculator - DOM Events Exercise

// TODO 1: Get references to all the input elements and buttons
// Hint: Use document.getElementById() to get elements by their ID
// - First number input (id: "firstNumber")
// - Second number input (id: "secondNumber")
// - All four operation buttons (add, subtract, multiply, divide)
// - Result display element (id: "result")

// TODO 2: Create a function to get values from input fields
// Hint: Create a function that:
// - Gets the values from both input fields (hint: use .value from input elements, https://www.w3schools.com/jsref/prop_text_value.asp)
// - Converts them to numbers using parseFloat() or Number()
// - Returns an object with both numbers
// - Handles empty inputs (return 0 if empty)
// - Example return: { first: 5, second: 10 }

// TODO 3: Create a function to display the result
// Hint: Create a function that:
// - Takes a result value as parameter
// - Updates the result display element's textContent
// - Formats the result nicely (maybe round to 2 decimal places)

// TODO 4: Create calculation functions
// Hint: Create separate functions for each operation:
// - addNumbers(num1, num2)
// - subtractNumbers(num1, num2)
// - multiplyNumbers(num1, num2)
// - divideNumbers(num1, num2)
// Remember: Check for division by zero!

// TODO 5: Add event listeners to the buttons
// Hint: Use addEventListener('click', function) for each button
// In each event listener:
// - Get the input values using your function from TODO 2
// - Perform the calculation using appropriate function from TODO 4
// - Display the result using your function from TODO 3

// TODO 6: (BONUS) Add input validation
// Hint: Check if inputs are valid numbers before calculating
// Show an error message if inputs are invalid

// TODO 7: (BONUS) Add keyboard support
// Hint: Listen for keypress events on input fields
// Allow users to press Enter to trigger the last used operation

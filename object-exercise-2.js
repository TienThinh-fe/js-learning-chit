// OBJECT EXERCISE 2

// Exercise 1:
// This below code has an error
// Please fix the error

// TODO: uncomment the code below before running
// let person = {
//   name: "John",
//   age: 25,
// };

// person = {
//   name: "Jane",
//   age: 30,
// };

// console.log(person.name); // Output: Jane

// Exercise 2:
// This below code has an error
// Please fix the error

// TODO: uncomment the code below before running
// const person = {
//   name: "John",
//   age: 25,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet(); // Output: Hello, my name is undefined => it should be 'John'

// Exercise 3:
// This below code has an error
// Please fix the error

// const obj = {
//   key1: "value1",
//   "key 2": "value 2",
// };

// const k1 = "key1";
// const k2 = "key 2";

// console.log(obj["key1"]); // ReferenceError: key1 is not defined => please fix to log 'value1' to the console
// console.log(obj[k2]); // undefined => please fix to log 'value 2' to the console
// console.log(obj["key 2"]); // undefined => please fix to log 'value 2' to the console
// console.log(obj[k1]); // undefined => please fix to log 'value1' to the console

// Exercise 4:
// This below code has an error
// Please fix the error

// const student = {
//   name: "John",
//   age: 20,
//   subjects: ["Math", "Science", "History"],
//   getDetails: function () {
//     return `${this.name} is ${
//       this.age
//     } years old and studies ${this.subjects.join(", ")}.`;
//   },
// };

// console.log(student.getDetails()); // Error => it should be 'John is 20 years old and studies Math, Science, History.'

// Exercise 5:
// Create an online shopping cart object with the following requirements:
// 1. It should have properties for customer name, items (array of objects), and contact details
// 2. Each item in the items array should have name, price, and quantity properties
// 3. Create methods to:
//    - Add item to cart
//    - Remove item from cart
//    - Calculate total price
//    - Generate an order summary
// 4. Use both dot notation and bracket notation in your implementation
// 5. Make sure all methods use 'this' keyword correctly

// TODO: Uncomment and complete the code below
const shoppingCart = {
  customerName: "Alex",
  items: [],
  contactDetails: {
    email: "alex@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
  },
  // Add item method - should add an item to the items array
  addItem: function (name, price, quantity) {
    // Your code here
  },
  // Remove item method - should remove an item by name
  removeItem: function (name) {
    // Your code here
  },
  // Calculate total price method - should calculate total price of all items
  calculateTotal: function () {
    // Your code here
  },
  // Generate order summary method - should return a string with order details
  orderSummary: function () {
    // Your code here - include customer name, list of items, and total price
  },
};

// Test your implementation:
// shoppingCart.addItem('Laptop', 999.99, 1);
// shoppingCart.addItem('Headphones', 99.99, 2);
// shoppingCart.addItem('Mouse', 29.99, 1);
// console.log(shoppingCart.items); // Should show all added items
// console.log(shoppingCart['calculateTotal']()); // Use bracket notation to call the method
// shoppingCart.removeItem('Headphones');
// console.log(shoppingCart.items); // Should show items without Headphones
// console.log(shoppingCart.orderSummary()); // Should show a formatted order summary

// Bonus Challenge:
// Add a method to apply a discount to the total price
// The method should take a discount percentage as parameter

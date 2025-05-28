# JS DOM THEORY - 2 - DOM Searching Methods

## What is DOM Searching?

- DOM Searching refers to the process of finding and selecting elements in the HTML document using JavaScript.

## What is `document` object?

- The `document` object is the entry point to the DOM. It represents the entire HTML document and provides methods and properties to access and manipulate its elements.
- The `document` object is automatically created by the browser when an HTML document is loaded.

## `document.getElementById()`

- The `document.getElementById()` method is used to select an element by its unique ID.
- It returns a reference to the first element with the specified ID. But you should note that IDs should be unique within a document.
- If no element with the specified ID is found, it returns `null`.

- Example:

```html
<p id="myElement">Hello, World!</p>
```

```javascript
// Get the element with id "myElement"
const element = document.getElementById('myElement')
console.log(element) // Output: <p id="myElement">Hello, World!</p>
```

## `document.getElementsByClassName()`

- The `document.getElementsByClassName()` method is used to select elements by their class name.
- It returns a live HTMLCollection (array) of all elements with the specified class name.
- If no elements with the specified class name are found, it returns an empty HTMLCollection (empty array).

- Example:

```html
<p class="myClass">Hello, World!</p>
<p class="myClass">Hello, Universe!</p>
```

```javascript
// Get all elements with class name "myClass"
const elements = document.getElementsByClassName('myClass')
console.log(elements) // Output: HTMLCollection(2) [p.myClass, p.myClass]

// Access the first element
const firstElement = elements[0]
console.log(firstElement) // Output: <p class="myClass">Hello, World!</p>
```

## `document.getElementsByTagName()`

- The `document.getElementsByTagName()` method is used to select elements by their tag name (e.g., `div`, `p`, `h1`, etc.).
- It returns a live HTMLCollection (array) of all elements with the specified tag name.
- If no elements with the specified tag name are found, it returns an empty HTMLCollection (empty array).

- Example:

```html
<p>Hello, World!</p>
<p>Hello, Universe!</p>
```

```javascript
// Get all <p> elements
const elements = document.getElementsByTagName('p')
console.log(elements) // Output: HTMLCollection(2) [p, p]

// Access the first element
const firstElement = elements[0]
console.log(firstElement) // Output: <p>Hello, World!</p>
```

## `document.querySelector()`

- The `document.querySelector()` method is used to select the first element that matches a specified CSS selector.
- It returns a reference to the first matching element or `null` if no matching element is found.
- This method is very powerful because it allows you to use any valid CSS selector to find elements.

- Class selectors: `.className`

- ID selectors: `#idName`

- Tag selectors: `tagName` (e.g., `div`, `p`, `h1`, etc.)

- Attribute selectors: `[attribute=value]`

- Descendant selectors: `parentSelector childSelector`

- Example:

```html
<p class="myClass">Hello, World!</p>

<p class="myClass">Hello, Universe!</p>

<div id="myDiv">
  <p>Hello, Galaxy!</p>
</div>

<a href="https://example.com">Example Link</a>
```

```javascript
// Class selector
const element1 = document.querySelector('.myClass')
console.log(element1) // Output: <p class="myClass">Hello, World!</p>

// ID selector
const element2 = document.querySelector('#myDiv')
console.log(element2) // Output: <div id="myDiv">...</div>

// Tag selector
const element3 = document.querySelector('p')
console.log(element3) // Output: <p class="myClass">Hello, World!</p>

// Attribute selector
const element4 = document.querySelector('a[href="https://example.com"]')
console.log(element4) // Output: <a href="https://example.com">Example Link</a>

// Descendant selector
const element5 = document.querySelector('#myDiv p')
console.log(element5) // Output: <p>Hello, Galaxy!</p>
```

## `document.querySelectorAll()`

- The `document.querySelectorAll()` method is used to select all elements that match a specified CSS selector.
- It returns a static NodeList (array) of all matching elements.
- If no matching elements are found, it returns an empty NodeList (empty array).

- Example:

```html
<p class="myClass">Hello, World!</p>
<p class="myClass">Hello, Universe!</p>
<p class="myClass">Hello, Galaxy!</p>
```

```javascript
// Class selector
const elements = document.querySelectorAll('.myClass')
console.log(elements) // Output: NodeList(3) [p.myClass, p.myClass, p.myClass]

// Access the first element
const firstElement = elements[0]
console.log(firstElement) // Output: <p class="myClass">Hello, World!</p>
```

## CSS Selectors

- CSS selectors are patterns used to select elements in an HTML document.
- They are used in various methods like `querySelector()` and `querySelectorAll()` to find elements based on their attributes, classes, IDs, and more.

- Common CSS selectors include:

  - **Type Selector**: Selects elements by their tag name (e.g., `div`, `p`, `h1`).
  - **Class Selector**: Selects elements by their class name (e.g., `.myClass`).
  - **ID Selector**: Selects an element by its ID (e.g., `#myId`).
  - **Attribute Selector**: Selects elements based on their attributes (e.g., `[type="text"]`).
  - **Descendant Selector**: Selects elements that are descendants of a specified element (e.g., `div p`).
  - **Child Selector**: Selects elements that are direct children of a specified element (e.g., `div > p`).
  - **Adjacent Sibling Selector**: Selects an element that is immediately after another specified element (e.g., `h1 + p`).
  - **General Sibling Selector**: Selects all siblings of a specified element (e.g., `h1 ~ p`).

- Example:

```html
<div class="container">
  <h1>Title</h1>
  <p class="myClass">Hello, World!</p>
  <p class="myClass">Hello, Universe!</p>
  <div id="myDiv">
    <p>Hello, Galaxy!</p>
  </div>

  <a href="https://example.com">Example Link</a>
  <a href="https://example.org">Example Link 2</a>
</div>

<form action="submit">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>
```

```javascript
// Type selector
const elements1 = document.querySelectorAll('p')
console.log(elements1) // Output: NodeList(3) [p.myClass, p.myClass, p]

// Class selector
const elements2 = document.querySelectorAll('.myClass')
console.log(elements2) // Output: NodeList(2) [p.myClass, p.myClass]

// ID selector
const elements3 = document.querySelectorAll('#myDiv')
console.log(elements3) // Output: NodeList(1) [div#myDiv]

// Attribute selector
const elements4 = document.querySelectorAll('input[type="text"]')
console.log(elements4) // Output: NodeList(1) [input[type="text"]]

// Descendant selector
const elements5 = document.querySelectorAll('.container p')
console.log(elements5) // Output: NodeList(3) [p.myClass, p.myClass, p]

// Child selector
const elements6 = document.querySelectorAll('.container > p')
console.log(elements6) // Output: NodeList(2) [p.myClass, p.myClass]

// Adjacent sibling selector
const elements7 = document.querySelectorAll('h1 + p')
console.log(elements7) // Output: NodeList(1) [p.myClass]

// General sibling selector
const elements8 = document.querySelectorAll('h1 ~ p')
console.log(elements8) // Output: NodeList(2) [p.myClass, p.myClass]
```

## Summary

- The `document` object is the entry point to the DOM and provides methods to access and manipulate elements.
  - `document.getElementById()`: Selects an element by its unique ID.
  - `document.getElementsByClassName()`: Selects elements by their class name.
  - `document.getElementsByTagName()`: Selects elements by their tag name.
  - `document.querySelector()`: Selects the first element that matches a CSS selector.
  - `document.querySelectorAll()`: Selects all elements that match a CSS selector.
  - CSS selectors are patterns used to select elements in an HTML document.

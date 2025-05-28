# JS DOM THEORY - 3 - DOM Manipulation Methods

## What is DOM Manipulation?

- DOM Manipulation refers to the process of changing the structure, content, or style of the HTML document using JavaScript.
- It allows developers to dynamically update the content of a web page without requiring a full page reload.
- Example:
  - Adding, removing, or modifying Todo item in a Todo list
  - Showing or hiding some element based on the condition

## `document.createElement()`

- The `document.createElement()` method is used to create a new HTML element.
- It takes a string argument representing the tag name of the element to be created.
- Note: The created element is not yet part of the document until it is appended to an existing element.

- Example:

```javascript
// Create a new <p> element
const newElement = document.createElement('p')

// Create a new <div> element with a class name
const newDiv = document.createElement('div')
newDiv.className = 'myClass'
```

## `element.innerHTML`

- The `element.innerHTML` property is used to get or set the HTML content of an element.
- When setting the value, it replaces the existing content with the new HTML content.

- Example:

```javascript
// <p id="myElement">Hello, World!</p>

// Get the element with id "myElement"
const element = document.getElementById('myElement')
// Set the inner HTML of the element
element.innerHTML = '<strong>Hello, World!</strong>'
// Output: <p id="myElement"><strong>Hello, World!</strong></p>
```

## `element.innerText`

- The `element.innerText` property is used to get or set the text content of an element.
- When setting the value, it replaces the existing text content with the new text.
- Unlike `innerHTML`, it does not interpret HTML tags, so it only sets the text content.

- Example:

```javascript
// <p id="myElement">Hello, World!</p>

// Get the element with id "myElement"
const element = document.getElementById('myElement')
// Set the inner text of the element
element.innerText = 'Hello, Universe!'
// Output: <p id="myElement">Hello, Universe!</p>

// If you try to set HTML content using innerText, it will treat it as plain text
element.innerText = '<strong>Hello, World!</strong>'
// Output: <p id="myElement">&lt;strong&gt;Hello, World!&lt;/strong&gt;</p>
```

## `element.setAttribute()`

- The `element.setAttribute()` method is used to set the value of an attribute on an element.
- It takes two arguments: the name of the attribute and the value to set.
- If the attribute already exists, it updates its value; if it does not exist, it creates a new attribute.

- Example:

```javascript
// <div id="myElement"></div>
// Get the element with id "myElement"
const element = document.getElementById('myElement')
// Set the class attribute of the element
element.setAttribute('class', 'myClass')
// Output: <div id="myElement" class="myClass"></div>
// Set a custom data attribute
element.setAttribute('data-custom', 'myValue')
// Output: <div id="myElement" class="myClass" data-custom="myValue"></div>
```

## `element.append()`

- The `element.append()` method is used to add new elements or text content as the last child of an existing element.
- It can take multiple arguments, which can be either elements or text nodes.
- If you pass a string, it will be treated as a text node and added as the last child.
- If you pass an element, it will be added as a child of the element.
- Note: `append()` does not return the new element, it simply appends it to the existing element.
- Example:

```javascript
// <div id="parentElement"></div>
// Get the parent element
const parentElement = document.getElementById('parentElement')

// Create a new <p> element
const newElement = document.createElement('p')

// Set the text content of the new element
newElement.textContent = 'Hello, World!'

// Append the new element to the parent element
parentElement.append(newElement)

// Output: <div id="parentElement"><p>Hello, World!</p></div>

// You can also append text directly
parentElement.append('This is a text node')
// Output: <div id="parentElement"><p>Hello, World!</p>This is a text node</div>

// You can append multiple elements or text nodes at once
parentElement.append(newElement, 'Another text node')
// Output: <div id="parentElement"><p>Hello, World!</p>This is a text node<p>Hello, World!</p>Another text node</div>
```

## `element.remove()`

- The `element.remove()` method is used to remove an element from the DOM.
- It does not take any arguments and simply removes the element on which it is called.
- If the element is not part of the document, it will not throw an error; it will simply do nothing.

- Example:

```javascript
// <div id="myElement">Hello, World!</div>

// Get the element with id "myElement"
const element = document.getElementById('myElement')

// Remove the element from the DOM
element.remove()
// Output: The element is removed from the DOM, so it will no longer be present in the document

// If you try to access the element after removing it, it will return null
const removedElement = document.getElementById('myElement') // This will return null
// Output: null
```

## `element.appendChild()` (old fashioned way)

- The `element.appendChild()` method is used to add a new child element to an existing element.
- It takes a single argument, which is the element to be added as a child.
- If the element already exists in the document, it is moved to the new position.

- Example:

```javascript
// <div id="parentElement"></div>
// Get the parent element
const parentElement = document.getElementById('parentElement')
// Create a new <p> element
const newElement = document.createElement('p')
// Set the text content of the new element
newElement.innerText = 'Hello, World!'
// Append the new element as a child of the parent element
parentElement.appendChild(newElement)
// Output: <div id="parentElement"><p>Hello, World!</p></div>
```

## `element.removeChild()` (old fashioned way)

- The `element.removeChild()` method is used to remove a child element from an existing element.
- It takes a single argument, which is the child element to be removed.
- The child element must be a direct child of the element from which it is being removed.

- Example:

```javascript
// <div id="parentElement"><p>Hello, World!</p></div>
// Get the parent element
const parentElement = document.getElementById('parentElement')
// Get the child element to be removed
const childElement = parentElement.querySelector('p')
// Remove the child element from the parent element
parentElement.removeChild(childElement)
// Output: <div id="parentElement"></div>

// If you try to remove a child that is not a direct child, it will throw an error
const anotherChild = document.createElement('span')
parentElement.removeChild(anotherChild) // This will throw an error
// Output: <div id="parentElement"></div>
```

## Other common DOM Manipulation Methods

- `element.insertBefore(newElement, referenceElement)`: Inserts a new element before a specified reference element.
- `element.replaceChild(newElement, oldElement)`: Replaces an existing child element with a new element.
- `element.prepend(newElement)`: Adds a new element as the first child of the element.
- `element.before`: Inserts content before the element.
- `element.after`: Inserts content after the element.

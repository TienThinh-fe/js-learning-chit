# JS DOM THEORY 4 - Introduction to DOM Events

## What are DOM Events?

- DOM Events are actions or occurrences that happen in the Document Object Model (DOM) of a web page.
- They can be triggered by user interactions (like clicks, key presses) or by the browser itself (like page load).

## List of some common DOM Events

| Event Type      | Event Name  | Description                                              | Example                                                             |
| --------------- | ----------- | -------------------------------------------------------- | ------------------------------------------------------------------- |
| Mouse Events    | `click`     | Triggered when an element is clicked                     | `<button onclick="handleClick()">Click Me</button>`                 |
| Mouse Events    | `dblclick`  | Triggered when an element is double-clicked              | `<button ondblclick="handleDoubleClick()">Double Click Me</button>` |
| Mouse Events    | `mouseover` | Triggered when the mouse pointer moves over an element   | `<div onmouseover="handleMouseOver()">Hover Me</div>`               |
| Mouse Events    | `mouseout`  | Triggered when the mouse pointer moves out of an element | `<div onmouseout="handleMouseOut()">Leave Me</div>`                 |
| Keyboard Events | `keydown`   | Triggered when a key is pressed down                     | `<input type="text" onkeydown="handleKeyDown()">`                   |
| Keyboard Events | `keyup`     | Triggered when a key is released                         | `<input type="text" onkeyup="handleKeyUp()">`                       |
| Keyboard Events | `keypress`  | Triggered when a key is pressed and released             | `<input type="text" onkeypress="handleKeyPress()">`                 |
| Form Events     | `submit`    | Triggered when a form is submitted                       | `<form onsubmit="handleSubmit()">`                                  |
| Form Events     | `change`    | Triggered when the value of an input element changes     | `<input type="text" onchange="handleChange()">`                     |
| Form Events     | `focus`     | Triggered when an input element gains focus              | `<input type="text" onfocus="handleFocus()">`                       |

## Event handlers

- Event handlers are functions that are executed in response to a specific event.
- They can be defined inline in HTML or added using JavaScript.

- Syntax for inline event handlers in HTML:

```html
<button onclick="handleClick()">Click Me</button>
```

- Syntax for adding event handlers using JavaScript: use `addEventListener`

```javascript
const button = document.getElementById('myButton')
button.addEventListener('click', function () {
  alert('Button clicked!')
})
```

```javascript
// Inline event handler in HTML
// index.html
;<button onclick="handleClick()">Click Me</button>

// script.js
function handleClick() {
  alert('Button clicked!')
}

// Adding event handlers using JavaScript
// index.html
;<button id="myButton">Click Me</button>

// script.js
const button = document.getElementById('myButton')
button.addEventListener('click', function () {
  alert('Button clicked!')
})
```

## Using `this` in event handlers

- In event handlers, `this` refers to the element that triggered the event.

```javascript
// Inline event handler in HTML
// index.html
;<button onclick="handleClick(this)">Click Me</button>

// script.js
function handleClick(element) {
  alert('Button clicked: ' + element.innerText)
}

// Adding event handlers using JavaScript
// index.html
;<button id="myButton">Click Me</button>
// script.js
const button = document.getElementById('myButton')
button.addEventListener('click', function () {
  alert('Button clicked: ' + this.innerText)
})
```

## Event Object

- The event object is automatically passed to the event handler function and contains information about the event.
- It provides properties and methods to access details about the event, such as the target element, type of event, and more.

```javascript
// Inline event handler in HTML
// index.html
;<button onclick="handleClick(event)">Click Me</button>

// script.js
function handleClick(event) {
  alert('Button clicked: ' + event.target.innerText)
}

// Adding event handlers using JavaScript
// index.html
;<button id="myButton">Click Me</button>
// script.js
const button = document.getElementById('myButton')
button.addEventListener('click', function (event) {
  alert('Button clicked: ' + event.target.innerText)
})
```

- Some common properties of the event object include:
  - `event.type`: The type of event (e.g., 'click', 'keydown').
  - `event.target`: The element that triggered the event. (often use for `<input>` elements)
  - `event.preventDefault()`: Prevents the default action associated with the event (e.g., preventing form submission).

```javascript
// Usage of event.type
const btn = document.getElementById('btn')

function handleEvent(e) {
  if (e.type === 'click') {
    console.log('Button was clicked')
  } else if (e.type === 'mouseover') {
    console.log('Button was hovered')
  }
}

btn.addEventListener('click', handleEvent)
btn.addEventListener('mouseover', handleEvent)

// Usage of event.target
const input = document.getElementById('inputField')

input.addEventListener('change', function (event) {
  console.log('Input changed:', event.target.value)
})

// Usage of event.preventDefault()
const form = document.getElementById('myForm')
form.addEventListener('submit', function (event) {
  event.preventDefault() // Prevents the form from submitting
  console.log('Form submission prevented')
})
```

# JS DOM Theory - 1 - Basic Concepts

## What is HTML DOM?

![alt text](html-dom.png)

- HTML DOM (Document Object Model) represents the structure of an HTML document as a tree of objects.
- Each element in the HTML document is represented as a node in the tree.
- Each node can have properties and methods that can be accessed and manipulated using JavaScript.

## How to attach a JavaScript file to an HTML document?

- You can attach a JavaScript file to an HTML document using the `<script>` tag.
- The `<script>` tag can be placed in the `<head>` or `<body>` section of the HTML document.
- The `src` attribute of the `<script>` tag specifies the path to the JavaScript file.

- Example:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

```javascript
// script.js
console.log('Hello, World!')
```

- In this example, the `script.js` file is attached to the `index.html` document using the `<script>` tag.
- When the HTML document is loaded in the browser, the JavaScript code in `script.js` will be executed => it will log "Hello, World!" to the console.

### What is the difference between put the `<script>` tag in the `<head>` and `<body>` section?

- If the `<script>` tag is placed in the `<head>` section, the JavaScript code will be executed before the HTML document is fully loaded.

- This can cause issues if the JavaScript code tries to access elements in the HTML document that have not yet been loaded.

## What task can be done with JavaScript?

- Get the content of an HTML element

```HTML
<p id="myElement">Hello, World!</p>
```

```javascript
// Get the content of the element with id "myElement"
const element = document.getElementById('myElement')
const content = element.innerHTML
console.log(content) // Output: Hello, World!
```

- Change the content of an HTML element

```HTML
<p id="myElement">Hello, World!</p>
```

```javascript
// Change the content of the element with id "myElement"
const element = document.getElementById('myElement')
element.innerHTML = 'Hello, Universe!'
```

```html
<p id="myElement">Hello, Universe!</p>
```

- Change the style of an HTML element

```HTML
<p id="myElement">Hello, World!</p>
```

```javascript
// Change the style of the element with id "myElement"
const element = document.getElementById('myElement')
element.style.color = 'red'
element.style.fontSize = '20px'
```

```html
<p id="myElement" style="color: red; font-size: 20px;">Hello, World!</p>
```

- Add or remove HTML elements

```HTML
<div id="myContainer">
  <p id="myElement">Hello, World!</p>
</div>
```

```javascript
// Add a new element to the container
const container = document.getElementById('myContainer')
const newElement = document.createElement('p')
newElement.innerHTML = 'This is a new element'
container.appendChild(newElement)
```

```html
<div id="myContainer">
  <p id="myElement">Hello, World!</p>
  <p>This is a new element</p>
</div>
```

```javascript
// Remove an element from the container
const element = document.getElementById('myElement')
const container = document.getElementById('myContainer')
container.removeChild(element)
```

```html
<div id="myContainer">
  <p>This is a new element</p>
</div>
```

- Handle events

```HTML
<button id="myButton">Click me!</button>
```

```javascript
// Handle the click event of the button
const button = document.getElementById('myButton')
button.addEventListener('click', function () {
  alert('Button clicked!')
})
```

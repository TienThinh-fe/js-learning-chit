// DOM Manipulation Exercise - Alert/Toast System (SOLUTION)
// This script demonstrates the use of DOM manipulation methods to create, show, and remove alerts

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Get references to DOM elements we'll be working with
  const showAlertBtn = document.getElementById('showAlert')
  const hideAlertBtn = document.getElementById('hideAlert')

  // Get a reference to the container element
  const container = document.querySelector('.container')

  // Create the alertContainer element
  const alertContainer = document.createElement('div')

  // Set the id attribute of alertContainer to 'alertContainer'
  alertContainer.setAttribute('id', 'alertContainer')

  // Append the alertContainer to the container element
  container.append(alertContainer)

  // Let's set up event listeners for our buttons
  showAlertBtn.addEventListener('click', createAndShowAlert)
  hideAlertBtn.addEventListener('click', removeAlert)

  // This function will create and show an alert
  function createAndShowAlert() {
    // Check if there's already an alert to avoid duplicates
    if (document.querySelector('.alert')) {
      return // Don't create another alert if one exists
    }

    // Use createElement to create a new div element for the alert
    const alertElement = document.createElement('div')

    // Use setAttribute to add the 'alert' class to the alert element
    alertElement.setAttribute('class', 'alert')

    // Use setAttribute to add a type class
    alertElement.setAttribute('class', 'alert alert-success')

    // Create the content div for the alert message
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'alert-content')

    // Use innerHTML to set the content of the alert including HTML tags
    contentDiv.innerHTML =
      '<strong>Success!</strong> This alert was created using <code>createElement</code> and added with <code>append</code>.'

    // Create a close button for the alert
    const closeButton = document.createElement('button')
    closeButton.setAttribute(
      'style',
      'background: none; border: none; cursor: pointer; font-size: 20px;',
    )

    // Use innerText to set the text of the close button (without HTML)
    closeButton.innerText = '×'

    // Add an event listener to the close button to remove the alert when clicked
    closeButton.addEventListener('click', function () {
      alertElement.remove()
    })

    // Use append to add both the content div and close button to the alert element
    alertElement.append(contentDiv, closeButton)

    // Use append to add the complete alert to the alertContainer
    alertContainer.append(alertElement)
  }

  // This function will remove the alert from the DOM
  function removeAlert() {
    // Find the alert element and use the remove method to remove it from the DOM
    const alertElement = document.querySelector('.alert')
    if (alertElement) {
      alertElement.remove()
    }
  }
})

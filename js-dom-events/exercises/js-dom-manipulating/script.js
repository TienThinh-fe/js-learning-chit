// DOM Manipulation Exercise - Alert/Toast System
// This script demonstrates the use of DOM manipulation methods to create, show, and remove alerts

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements we'll be working with
  const showAlertBtn = document.getElementById("showAlert");
  const hideAlertBtn = document.getElementById("hideAlert");

  // TODO: Use createElement to create a container for alerts
  // Create a div element with id 'alertContainer' and append it to the container div

  // console.log(newElement);
  // Get a reference to the container element (either the one you created or an existing one)
  // This is where alerts will be displayed
  const container = document.querySelector(".container");

  // TODO: Create the alertContainer element
  const newAlertContainer = document.createElement("div");

  // TODO: Set the id attribute of alertContainer to 'alertContainer'
  newAlertContainer.setAttribute("id", "alertContainer");

  // TODO: Append the alertContainer to the container element
  container.append(newAlertContainer);

  // Now get a reference to your newly created alertContainer
  const alertContainer = document.getElementById("alertContainer");

  // Let's set up event listeners for our buttons
  showAlertBtn.addEventListener("click", createAndShowAlert);
  hideAlertBtn.addEventListener("click", removeAlert);

  // This function will create and show an alert
  function createAndShowAlert() {
    // Check if there's already an alert to avoid duplicates
    if (document.querySelector(".alert")) {
      return; // Don't create another alert if one exists
    }

    // TODO: Use createElement to create a new div element for the alert
    // Create a new div element that will serve as our alert
    const newAlertSuccess = document.createElement("div");

    // TODO: Use setAttribute to add the 'alert' class to the alert element
    // Add the 'alert' class to the element
    newAlertSuccess.setAttribute("class", "alert alert-success");

    // TODO: Use setAttribute to add a type class like 'alert-success', 'alert-warning', 'alert-danger', or 'alert-info'
    // Add a specific alert type class (you can choose from: alert-success, alert-warning, alert-danger, alert-info)
    // newAlertSuccess.setAttribute("class", "alert-success");
    // newAlertSuccess.setAttribute("class", "alert-warning");
    // newAlertSuccess.setAttribute("class", "alert-danger");
    // newAlertSuccess.setAttribute("class", "alert-info");

    // TODO: Create the content div for the alert message and add it to the alert
    // Create a div for alert content
    const newAlertContent = document.createElement("div");
    newAlertContent.setAttribute("class", "alert-content");

    // TODO: Use innerHTML to set the content of the alert including HTML tags
    // Set the HTML content with a title and message (using innerHTML allows you to include HTML tags)
    newAlertContent.innerHTML = "<strong>Success! He is my boyfriend </strong>";

    // TODO: Create a close button for the alert
    // Create a button to close the alert
    const newButtonCloseAlert = document.createElement("button");

    // TODO: Use innerText to set the text of the close button (without HTML)
    // Set the text of the close button (using innerText ensures it's treated as plain text, not HTML)
    newButtonCloseAlert.innerText = "X";

    // TODO: Add an event listener to the close button to remove the alert when clicked
    // Make the close button functional by adding an event listener
    newButtonCloseAlert.addEventListener("click", function () {
      newAlertSuccess.remove();
    });
    // TODO: Use append to add both the content div and close button to the alert element
    // Add the content div and close button to the alert element
    newAlertSuccess.append(newAlertContent, newButtonCloseAlert);

    // TODO: Use append to add the complete alert to the alertContainer
    // Add the complete alert to the container in the DOM
    newAlertContainer.append(newAlertSuccess);
  }

  // This function will remove the alert from the DOM
  function removeAlert() {
    // TODO: Find the alert element and use the remove method to remove it from the DOM
    // Find and remove the alert if it exists
    const findAlert = document.querySelector(".alert");
    findAlert.remove();
  }
});

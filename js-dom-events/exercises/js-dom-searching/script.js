// Utility function to display results
function displayResult(methodName, elements) {
  const resultArea = document.getElementById("result-area");

  // Create a result section for this method
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("result-section");

  // Create a heading for the method name
  const heading = document.createElement("h4");
  heading.textContent = `${methodName} Results:`;
  sectionDiv.appendChild(heading);

  // Create a paragraph to show what was found
  const resultPara = document.createElement("p");

  // Handle different types of elements
  if (elements === null) {
    resultPara.textContent = "No elements found.";
  } else if (elements instanceof HTMLElement) {
    // Single element
    resultPara.textContent = `Found: ${elements.tagName.toLowerCase()}${
      elements.id ? ' with id="' + elements.id + '"' : ""
    }${
      elements.className ? ' with class="' + elements.className + '"' : ""
    } => "${elements.textContent.trim().substring(0, 50)}${
      elements.textContent.trim().length > 50 ? "..." : ""
    }"`;
  } else if (elements.length !== undefined) {
    // Collection of elements
    resultPara.textContent = `Found ${elements.length} element(s): `;

    if (elements.length > 0) {
      const list = document.createElement("ul");

      // For HTMLCollections and NodeLists
      for (let i = 0; i < elements.length && i < 5; i++) {
        const item = document.createElement("li");
        const element = elements[i];
        item.textContent = `${element.tagName.toLowerCase()}${
          element.id ? ' with id="' + element.id + '"' : ""
        }${
          element.className ? ' with class="' + element.className + '"' : ""
        } => "${element.textContent.trim().substring(0, 30)}${
          element.textContent.trim().length > 30 ? "..." : ""
        }"`;
        list.appendChild(item);
      }

      if (elements.length > 5) {
        const item = document.createElement("li");
        item.textContent = `... and ${elements.length - 5} more`;
        list.appendChild(item);
      }

      sectionDiv.appendChild(resultPara);
      sectionDiv.appendChild(list);
    } else {
      sectionDiv.appendChild(resultPara);
    }

    // Early return as we've already handled appending
    resultArea.appendChild(sectionDiv);
    return;
  }

  sectionDiv.appendChild(resultPara);
  resultArea.appendChild(sectionDiv);
}

// Clear previous results
function clearResults() {
  const resultArea = document.getElementById("result-area");
  resultArea.innerHTML = "";
  console.clear();
}

// Exercise functions
function runExercises() {
  clearResults();

  // Exercise 1: document.getElementById()
  function exerciseGetElementById() {
    console.log("--- Exercise 1: document.getElementById() ---");

    // Find the main title
    // TODO: Find the main title element by its ID and store it in the mainTitle variable
    const mainTitle = document.getElementById("main-title");
    console.log("Main title:", mainTitle);
    displayResult('getElementById("main-title")', mainTitle);

    // Find the content box
    // TODO: Find the content box element by its ID and store it in the contentBox variable
    const contentBox = document.getElementById("content-box");
    console.log("Content box:", contentBox);
    displayResult('getElementById("content-box")', contentBox);

    // Find the user form
    // TODO: Find the user form element by its ID and store it in the userForm variable
    const userForm = document.getElementById("user-form");
    console.log("User form:", userForm);
    displayResult('getElementById("user-form")', userForm);

    // Try to find an element that doesn't exist
    // TODO: Try to find an element with an ID that doesn't exist in the document
    const nonExistent = document.getElementById("Bim");
    console.log("Non-existent element:", nonExistent);
    displayResult('getElementById("non-existent-id")', nonExistent); // Output: "No element found???"
  }

  // Exercise 2: document.getElementsByClassName()
  function exerciseGetElementsByClassName() {
    console.log("--- Exercise 2: document.getElementsByClassName() ---");

    // Find all elements with the 'highlight' class
    // TODO: Find all elements with the highlight class and store them in the highlightedElements variable
    const highlightedElements = document.getElementsByClassName("highlight");
    console.log("Highlighted elements:", highlightedElements);
    displayResult('getElementsByClassName("highlight")', highlightedElements);

    // Find all elements with the 'info-text' class
    // TODO: Find all elements with the info-text class and store them in the infoTextElements variable
    const infoTextElements = document.getElementsByClassName("info-text");
    console.log("Info text elements:", infoTextElements);
    displayResult('getElementsByClassName("info-text")', infoTextElements);

    // Find all elements with the 'link' class
    // TODO: Find all elements with the link class and store them in the linkElements variable
    const linkElements = document.getElementsByClassName("link");
    console.log("Link elements:", linkElements);
    displayResult('getElementsByClassName("link")', linkElements);

    // Try to find elements with a class that doesn't exist
    // TODO: Try to find elements with a class that doesn't exist in the document
    const nonExistentClass = document.getElementsByClassName("Chit");
    console.log("Non-existent class elements:", nonExistentClass);
    displayResult(
      'getElementsByClassName("non-existent-class")',
      nonExistentClass
    );
  }

  // Exercise 3: document.getElementsByTagName()
  function exerciseGetElementsByTagName() {
    console.log("--- Exercise 3: document.getElementsByTagName() ---");

    // Find all paragraph elements
    // TODO: Find all paragraph elements and store them in the paragraphs variable
    const paragraphs = document.getElementsByTagName("p");
    console.log("Paragraphs:", paragraphs);
    displayResult('getElementsByTagName("p")', paragraphs);

    // Find all div elements
    // TODO: Find all div elements and store them in the divs variable
    const divs = document.getElementsByTagName("div");
    console.log("Divs:", divs);
    displayResult('getElementsByTagName("div")', divs);

    // Find all anchor elements
    // TODO: Find all anchor elements and store them in the anchors variable
    const anchors = document.getElementsByTagName("a");
    console.log("Anchors:", anchors);
    displayResult('getElementsByTagName("a")', anchors);

    // Find all input elements
    // TODO: Find all input elements and store them in the inputs variable
    const inputs = document.getElementsByTagName("input");
    console.log("Inputs:", inputs);
    displayResult('getElementsByTagName("input")', inputs);

    // Find all table rows
    // TODO: Find all table row elements and store them in the rows variable
    const rows = document.getElementsByTagName("tr");
    console.log("Table rows:", rows);
    displayResult('getElementsByTagName("tr")', rows);
  }

  // Exercise 4: document.querySelector()
  function exerciseQuerySelector() {
    console.log("--- Exercise 4: document.querySelector() ---");

    // Find the first paragraph with class 'info-text'
    // TODO: Find the first paragraph with the info-text class using querySelector
    const firstInfoText = document.querySelector(".info-text");
    console.log("First info-text paragraph:", firstInfoText);
    displayResult('querySelector("p.info-text")', firstInfoText);

    // Find the first link with attribute target="_blank"
    // TODO: Find the first link with target="_blank" attribute using querySelector
    const externalLink = document.querySelector('a[target="_blank"]');
    console.log("First external link:", externalLink);
    displayResult('querySelector("a[target=\\"_blank\\"]")', externalLink);

    // Find the first element with both 'info-text' and 'highlight' classes
    // TODO: Find the first element with both info-text and highlight classes
    const highlightedInfo = document.querySelector(".info-text.highlight");
    console.log("First highlighted info:", highlightedInfo);
    displayResult('querySelector(".info-text.highlight")', highlightedInfo);

    // Find the first paragraph inside the content box
    // TODO: Find the first paragraph inside the content box using querySelector
    const contentBoxPara = document.querySelector("#content-box");
    console.log("First paragraph in content box:", contentBoxPara);
    displayResult('querySelector("#content-box p")', contentBoxPara);

    // Find the first highlighted list item
    // TODO: Find the first list item with the highlight class
    const highlightedListItem = document.querySelector("li.highlight");
    console.log("First highlighted list item:", highlightedListItem);
    displayResult('querySelector("li.highlight")', highlightedListItem);

    // Find the submit button
    // TODO: Find the submit button using querySelector
    const submitButton = document.querySelector('button[type="submit"]');
    console.log("Submit button:", submitButton);
    displayResult('querySelector("button[type=\\"submit\\"]")', submitButton);

    // Find the first table cell in the highlighted row
    // TODO: Find the first table cell in the highlighted row
    const cellInHighlightedRow = document.querySelector("tr.highlight");
    console.log("First cell in highlighted row:", cellInHighlightedRow);
    displayResult('querySelector("tr.highlight td")', cellInHighlightedRow);

    // Find the deepest nested paragraph
    // TODO: Find the paragraph inside the deepest nested element
    const deepestParagraph = document.querySelector(".level-3 p");
    console.log("Deepest nested paragraph:", deepestParagraph);
    displayResult('querySelector(".level-3 p")', deepestParagraph);
  }

  // Exercise 5: document.querySelectorAll()
  function exerciseQuerySelectorAll() {
    console.log("--- Exercise 5: document.querySelectorAll() ---");

    // Find all paragraphs with class 'info-text'
    // TODO: Find all paragraphs with the info-text class
    const allInfoTexts = document.querySelectorAll(".info-text");
    console.log("All info-text paragraphs:", allInfoTexts);
    displayResult('querySelectorAll("p.info-text")', allInfoTexts);

    // Find all elements with the 'highlight' class
    // TODO: Find all elements with the highlight class
    const allHighlightedElements = document.querySelectorAll(".highlight");
    console.log("All highlighted elements:", allHighlightedElements);
    displayResult('querySelectorAll(".highlight")', allHighlightedElements);

    // Find all links
    // TODO: Find all anchor elements in the document
    const allLinks = document.querySelectorAll("a");
    console.log("All links:", allLinks);
    displayResult('querySelectorAll("a")', allLinks);

    // Find all input elements inside the form
    // TODO: Find all input elements inside the form
    const formInputs = document.querySelectorAll("input");
    console.log("All form inputs:", formInputs);
    displayResult('querySelectorAll("#user-form input")', formInputs);

    // Find all table cells
    // TODO: Find all table cells in the document
    const allCells = document.querySelectorAll("td");
    console.log("All table cells:", allCells);
    displayResult('querySelectorAll("td")', allCells);

    // Find all paragraphs inside any level of nesting
    // TODO: Find all paragraphs inside the nested section
    const allNestedParagraphs = document.querySelectorAll("#nested-section p");
    console.log("All nested paragraphs:", allNestedParagraphs);
    displayResult('querySelectorAll("#nested-section p")', allNestedParagraphs);
  }

  // Run all exercises
  exerciseGetElementById();
  exerciseGetElementsByClassName();
  exerciseGetElementsByTagName();
  exerciseQuerySelector();
  exerciseQuerySelectorAll();

  console.log(
    "All exercises completed! Check the results displayed on the page."
  );
}

// Run exercises when the page loads
document.addEventListener("DOMContentLoaded", runExercises);

// You can also run specific exercises from the console if needed
// For example: exerciseGetElementById();

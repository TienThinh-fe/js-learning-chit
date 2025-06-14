//input a name of job -> click Add -> show the items into the list.

const jobNameInput = document.getElementById("jobName");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const dateInput = document.getElementById("dueDate");
const prioritySelect = document.getElementById("priority");

const formatDate = (dateString) => {
  if (!dateString) return "No due date";

  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
};

window.addEventListener("load", () => {
  jobNameInput.focus();
});

addBtn.addEventListener("click", function () {
  if (jobNameInput.value === "") {
    return;
  }

  const listItem = document.createElement("li");

  const jobName = jobNameInput.value;
  const dueDateString = dateInput.value;
  const priority = prioritySelect.value;
  listItem.innerText = `${jobName} - ${formatDate(
    dueDateString
  )} - ${priority} `;

  if (priority === "high") {
    listItem.setAttribute("class", "todo-item todo-high");
  } else if (priority === "medium") {
    listItem.setAttribute("class", "todo-item todo-medium");
  } else listItem.setAttribute("class", "todo-item todo-low");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.append(deleteBtn);
  list.append(listItem);

  jobNameInput.value = "";
});

// input validation, empty, min length = 2,
// sepecial charactor -> error message.
// default value for 'dueDate' = currrent time.

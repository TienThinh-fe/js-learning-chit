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

addBtn.addEventListener("click", function () {
  if (jobNameInput.value === "") {
    return;
  }
  const listItem = document.createElement("li");
  const jobName = jobNameInput.value;
  const deleteBtn = document.createElement("button");
  const dueDateString = dateInput.value;
  // const dueDateObject = new Date(dueDateString);
  // const day = dueDateObject.getDate();
  // const month = dueDateObject.getMonth() + 1;
  // const year = dueDateObject.getFullYear();
  // const dueDate = `${day}/${month}/${year}`;
  deleteBtn.innerText = "Delete";
  listItem.innerText = `${jobName} - ${formatDate(dueDateString)}`;
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.append(deleteBtn);
  list.append(listItem);
  jobNameInput.value = "";
  // dateInput.value = "";
});

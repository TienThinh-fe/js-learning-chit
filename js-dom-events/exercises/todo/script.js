//input a name of job -> click Add -> show the items into the list.

const jobNameInput = document.getElementById("jobName");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const dateInput = document.getElementById("dueDate");

addBtn.addEventListener("click", function () {
  if (jobNameInput.value === "") {
    return;
  }
  const listItem = document.createElement("li");
  const jobName = jobNameInput.value;
  const deleteBtn = document.createElement("button");
  const dueDateString = dateInput.value;
  const dueDateObject = new Date(dueDateString);
  const day = dueDateObject.getDate();
  const month = dueDateObject.getMonth() + 1;
  const year = dueDateObject.getFullYear();
  const dueDate = `${day}/${month}/${year}`;
  deleteBtn.innerText = "Delete";
  listItem.innerText = `${jobName} - ${dueDate}`;
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.append(deleteBtn);
  list.append(listItem);
  jobNameInput.value = "";
});

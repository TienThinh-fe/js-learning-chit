//input a name of job -> click Add -> show the items into the list.

const jobNameInput = document.getElementById('jobName')
const addBtn = document.getElementById('add')
const list = document.getElementById('list')
const dateInput = document.getElementById('dueDate')
const prioritySelect = document.getElementById('priority')
const errorMessageEle = document.getElementById('errorMessage')

const formatDate = (dateString) => {
  if (!dateString) return 'No due date'

  const dateObject = new Date(dateString)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  return `${day}/${month}/${year}`
}

window.addEventListener('load', () => {
  jobNameInput.focus()
  dateInput.valueAsDate = new Date()
})

addBtn.addEventListener('click', function () {
  if (jobNameInput.value === '') {
    errorMessageEle.innerText = 'Please input a valid item!'

    return
  }

  if (jobNameInput.value.length <= 2) {
    errorMessageEle.innerText = 'Please input more than 2 characters!'

    return
  }

  const listItem = document.createElement('li')

  const jobName = jobNameInput.value
  const dueDateString = dateInput.value

  const priority = prioritySelect.value
  listItem.innerText = `${jobName} - ${formatDate(
    dueDateString,
  )} - ${priority} `

  if (priority === 'high') {
    listItem.setAttribute('class', 'todo-item todo-high')
  } else if (priority === 'medium') {
    listItem.setAttribute('class', 'todo-item todo-medium')
  } else listItem.setAttribute('class', 'todo-item todo-low')

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete'
  deleteBtn.addEventListener('click', function () {
    listItem.remove()
  })

  listItem.append(deleteBtn)
  list.append(listItem)

  jobNameInput.value = ''
})

jobNameInput.addEventListener('input', () => {
  errorMessageEle.innerText = ''
})

// input validation, empty, min length = 2,
// special character -> error message.
// default value for 'dueDate' = current time.

console.log(123)

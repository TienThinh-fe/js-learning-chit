import {
  jobNameInput,
  addBtn,
  list,
  dateInput,
  prioritySelect,
  errorMessageEle,
} from './elements.js'
import { formatDate } from './utils.js'
import { getPriorityClass } from './utils.js'
import { deleteBtn } from './delete-button.js'

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

  listItem.setAttribute('class', getPriorityClass(priority))

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

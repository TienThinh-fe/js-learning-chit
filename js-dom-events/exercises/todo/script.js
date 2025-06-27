import {
  jobNameInput,
  addBtn,
  list,
  dateInput,
  prioritySelect,
  errorMessageEle,
  confirmationDialog,
  cancelDeleteBtn,
  confirmDeleteBtn,
  cancelEditBtn,
  editDialog,
} from './elements.js'
import { formatDate } from './utils.js'
import { getPriorityClass } from './utils.js'

window.addEventListener('load', () => {
  jobNameInput.focus()
  dateInput.valueAsDate = new Date()
})

let deleteItem = null

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

  const editBtn = document.createElement('button')

  editBtn.innerText = 'Edit'

  editBtn.addEventListener('click', () => {
    editDialog.showModal()
  })

  const deleteBtn = document.createElement('button')

  deleteBtn.innerText = 'Delete'

  deleteBtn.addEventListener('click', function () {
    deleteItem = listItem
    confirmationDialog.showModal()
  })

  listItem.append(deleteBtn)
  listItem.append(editBtn)
  list.append(listItem)

  jobNameInput.value = ''
})

jobNameInput.addEventListener('input', () => {
  errorMessageEle.innerText = ''
})

cancelDeleteBtn.addEventListener('click', () => {
  confirmationDialog.close()
})

confirmDeleteBtn.addEventListener('click', () => {
  if (deleteItem) {
    deleteItem.remove()
    deleteItem = null
  }
  confirmationDialog.close()
})

cancelEditBtn.addEventListener('click', () => {
  editDialog.close()
})

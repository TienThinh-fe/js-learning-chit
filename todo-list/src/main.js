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
  jobNameEditInput,
  dateEditInput,
  priorityEditSelect,
  saveEditBtn,
} from './elements.js'
import { formatDate, getPriorityClass } from './utils.js'

window.addEventListener('load', () => {
  jobNameInput.focus()
  dateInput.valueAsDate = new Date()
})

let deleteItem = null
let editItem = null

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

  listItem.innerHTML = `<span> ${jobName} - ${formatDate(
    dueDateString,
  )} - ${priority} </span>`

  listItem.setAttribute('class', getPriorityClass(priority))

  const editBtn = document.createElement('button')

  editBtn.innerText = 'Edit'

  editBtn.addEventListener('click', () => {
    editItem = listItem

    jobNameEditInput.value = jobName
    dateEditInput.value = dueDateString
    priorityEditSelect.value = priority

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

saveEditBtn.addEventListener('click', () => {
  if (editItem) {
    const jobName = jobNameEditInput.value
    const dueDateString = dateEditInput.value
    const priority = priorityEditSelect.value

    editItem.querySelector('span').innerText = `${jobName} - ${formatDate(
      dueDateString,
    )} - ${priority}`

    editItem.setAttribute('class', getPriorityClass(priority))
    editItem = null
  }
  editDialog.close()
})

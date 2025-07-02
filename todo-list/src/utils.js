export const formatDate = (dateString) => {
  if (!dateString) return 'No due date'

  const dateObject = new Date(dateString)
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  return `${day}/${month}/${year}`
}

export const getPriorityClass = (priority) => {
  if (priority === 'high') {
    return 'todo-item todo-high'
  }

  if (priority === 'medium') {
    return 'todo-item todo-medium'
  }

  return 'todo-item todo-low'
}

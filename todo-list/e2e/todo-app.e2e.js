import { expect } from '@wdio/globals'

describe('Todo App - Basic Elements Test', () => {
  it('should display all required form elements on page load', async () => {
    // Navigate to the todo application
    // Using baseUrl configured in wdio.conf.js (http://localhost:5173)
    await browser.url('/')

    // Wait for the page to load completely
    await browser.waitUntil(
      async () => {
        const title = await browser.getTitle()
        return title === 'Todo List'
      },
      {
        timeout: 5000,
        timeoutMsg: 'Page did not load within 5 seconds',
      },
    )

    // Test 1: Verify Job Name input field exists and is visible
    const jobNameInput = await $('#jobName')
    await expect(jobNameInput).toBeDisplayed()
    await expect(jobNameInput).toHaveAttribute('id', 'jobName')

    // Test 2: Verify Due Date input field exists and is visible
    const dueDateInput = await $('#dueDate')
    await expect(dueDateInput).toBeDisplayed()
    await expect(dueDateInput).toHaveAttribute('type', 'date')
    await expect(dueDateInput).toHaveAttribute('name', 'dueDate')

    // Test 3: Verify Priority select dropdown exists and is visible
    const prioritySelect = await $('#priority')
    await expect(prioritySelect).toBeDisplayed()
    await expect(prioritySelect).toHaveAttribute('name', 'priority')

    // Verify priority dropdown has all expected options
    const priorityOptions = await prioritySelect.$$('option')
    await expect(priorityOptions).toHaveLength(3)

    // Check each priority option text
    const highOption = await prioritySelect.$('option[value="high"]')
    const mediumOption = await prioritySelect.$('option[value="medium"]')
    const lowOption = await prioritySelect.$('option[value="low"]')

    await expect(await highOption.getText()).toBe('High')
    await expect(await mediumOption.getText()).toBe('Medium')
    await expect(await lowOption.getText()).toBe('Low')

    // Test 4: Verify Add button exists and is visible
    const addButton = await $('#add')
    await expect(addButton).toBeDisplayed()
    await expect(addButton).toHaveText('Add')

    // Test 5: Verify the todo list container exists (empty initially)
    const todoList = await $('#list')
    await expect(todoList).toBeDisplayed()
    await expect(todoList).toBeEmpty()

    // Test 6: Verify error message element exists (should be empty initially)
    const errorMessage = await $('#errorMessage')
    await expect(errorMessage).toBeDisplayed()
    await expect(errorMessage).toHaveText('')

    // Test 7: Verify job name input has focus on page load
    const focusedElement = await browser.getActiveElement()
    const focusedElementId = await focusedElement.getAttribute('id')
    await expect(focusedElementId).toBe('jobName')

    // Test 8: Verify due date input has today's date as default value
    const today = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
    const dueDateValue = await dueDateInput.getValue()
    await expect(dueDateValue).toBe(today)

    console.log('✅ All required elements are displayed correctly!')
  })

  it('should have proper labels for all input fields', async () => {
    // Navigate to the application
    await browser.url('/')

    // Test labels are properly associated with their inputs

    // Job Name label
    const jobNameLabel = await $('label[for="jobName"]')
    await expect(jobNameLabel).toBeDisplayed()
    await expect(await jobNameLabel.getText()).toBe('Job Name:')

    // Due Date label
    const dueDateLabel = await $('label[for="dueDate"]')
    await expect(dueDateLabel).toBeDisplayed()
    await expect(await dueDateLabel.getText()).toBe('Due Date:')

    // Priority label
    const priorityLabel = await $('label[for="priority"]')
    await expect(priorityLabel).toBeDisplayed()
    await expect(await priorityLabel.getText()).toBe('Priority:')

    console.log('✅ All labels are properly displayed and associated!')
  })
})

# Todo List E2E Tests

This folder contains end-to-end tests for the Todo List application using WebdriverIO.

## Prerequisites

1. Make sure all dependencies are installed:

   ```bash
   npm install
   ```

2. Start the development server in one terminal:

   ```bash
   npm run dev
   ```

   **Important:** Note the port number the server starts on (it might be 5173, 5174, 5175, etc. if other ports are in use). You'll need to update the `baseUrl` in `wdio.conf.js` if it's not running on port 5175.

## Running the Tests

In a separate terminal, run the E2E tests:

```bash
npm run wdio
```

## Test Structure

### `todo-app.e2e.js`

This file contains basic tests to verify that all required UI elements are present and properly configured:

- **Test 1: Basic Elements Test**

  - Verifies Job Name input field exists and is visible
  - Verifies Due Date input field exists with correct type
  - Verifies Priority select dropdown with all options
  - Verifies Add button is present and clickable
  - Verifies todo list container exists
  - Verifies error message element exists
  - Verifies initial focus is on Job Name input
  - Verifies due date has today's date as default

- **Test 2: Labels Test**
  - Verifies all labels are properly associated with their input fields
  - Verifies label text content is correct

## Test Configuration

The tests are configured in `wdio.conf.js`:

- Browser: Chrome (headless by default)
- Base URL: Configurable (check the current port in wdio.conf.js)
- Framework: Mocha
- Reporter: Spec reporter for clear console output

## Understanding the Test Code

### Key WebdriverIO Commands Used:

1. `browser.url('/')` - Navigate to the application
2. `$('#elementId')` - Find element by ID selector
3. `expect(element).toBeDisplayed()` - Assert element is visible
4. `expect(element).toHaveAttribute('attr', 'value')` - Assert element has specific attribute
5. `expect(element).toHaveText('text')` - Assert element contains specific text
6. `browser.waitUntil()` - Wait for a condition to be true

### Test Structure:

- `describe()` - Groups related tests together
- `it()` - Individual test case
- `await` - All WebdriverIO commands are asynchronous and return promises
- `expect()` - Assertion library for verifying test conditions

## Troubleshooting

### Common Issues:

1. **"Could not resolve vite.config.ts" error**

   - Make sure `vite.config.js` exists in the project root
   - The wdio-vite-service needs this config file to work properly

2. **Chrome user data directory errors**

   - The tests run Chrome in headless mode with specific flags to avoid conflicts
   - If you still see issues, try closing all Chrome instances before running tests

3. **Port conflicts**

   - Make sure the dev server is running on port 5173
   - Check if any other services are using the same port

4. **Test timeouts**
   - Ensure the application loads within 5 seconds
   - Check if the dev server is accessible at the configured baseUrl

### Running Tests in Debug Mode:

To see the browser while tests run (non-headless), temporarily remove the `--headless` flag from the Chrome options in `wdio.conf.js`.

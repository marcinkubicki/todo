import { test, expect } from '@playwright/test'

test.describe('Todo App', () => {
   test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:5173')
   })

   test('should add a new task', async ({ page }) => {
      const taskInput = page.getByRole('textbox', { name: /add new task/i })
      const addButton = page.getByRole('button', { name: /add/i })

      await taskInput.fill('Test Task')
      await addButton.click()

      await expect(page.getByText('Test Task')).toBeVisible()
   })

   test('should delete a task', async ({ page }) => {
      const taskInput = page.getByRole('textbox', { name: /add new task/i })
      const addButton = page.getByRole('button', { name: /add/i })

      await taskInput.fill('Task to be deleted')
      await addButton.click()

      const deleteButton = page.getByRole('button', { name: /delete/i, exact: true })
      await deleteButton.click()

      await expect(page.getByText('Task to be deleted')).not.toBeVisible()
   })
})

import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Destination' and click on it
  await page.click('text=Destination')
  // The new URL should be "/destination" (baseURL is used there)
  await expect(page).toHaveURL('/destination')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Pick your destination')
})

test('should navigate to the crew page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Destination' and click on it
  await page.click('text=Crew')
  // The new URL should be "/destination" (baseURL is used there)
  await expect(page).toHaveURL('/crew')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Meet your crew')
})

test('should navigate to the technology page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Destination' and click on it
  await page.click('text=Technology')
  // The new URL should be "/destination" (baseURL is used there)
  await expect(page).toHaveURL('/technology')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('Space launch 101')
})

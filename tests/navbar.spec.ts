import { test, expect } from "@playwright/test";

test("navbar links", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.locator("#link-to-practice").click();
  await expect(page).toHaveURL("http://localhost:3001/en/practice");
  await page.locator("#link-to-learn").click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
  await page.locator("#link-to-login").click();
  await expect(page).toHaveURL("http://localhost:3001/en/login");
});

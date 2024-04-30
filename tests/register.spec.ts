import { test, expect } from "@playwright/test";

test("register", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.reload();
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Don't have an account yet?" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en/register");
  await page.getByPlaceholder("example", { exact: true }).click();
  await page.getByPlaceholder("example", { exact: true }).fill("gato");
  await page.getByPlaceholder("example", { exact: true }).press("Tab");
  await page.getByPlaceholder("example@example.com").fill("gato@gmail.com");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("aaa");
  await page.locator('input[name="repeatPassword"]').click();
  await page.locator('input[name="repeatPassword"]').fill("aaa");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator('input[name="password"]').fill("aaaaaaaaaaa");
  await page.locator('input[name="repeatPassword"]').click();
  await page.locator('input[name="repeatPassword"]').fill("aaaaaaaaaaa");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en");
});

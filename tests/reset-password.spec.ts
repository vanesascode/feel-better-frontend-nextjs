import { test, expect } from "@playwright/test";

test("reset password", async ({ page }) => {
  await page.goto("http://localhost:3001/en/reset-password");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en/reset-password");
  await page
    .getByPlaceholder("example@example.com")
    .fill("namotoninja@gmail.com");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("aaa");
  await page.locator('input[name="repeatPassword"]').click();
  await page.locator('input[name="repeatPassword"]').fill("aaa");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator('input[name="password"]').fill("aaaaaaaaaaa");
  await page.locator('input[name="repeatPassword"]').click();
  await page.locator('input[name="repeatPassword"]').fill("aaaaaaaaaaa");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Ok" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en/login");
});

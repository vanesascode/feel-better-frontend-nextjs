import { test, expect } from "@playwright/test";

test("go to meditation", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("link", { name: "Meditation", exact: true }).click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page.getByRole("button", { name: "Start" }).first().click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation");
});

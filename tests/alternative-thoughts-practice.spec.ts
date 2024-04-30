import { test, expect } from "@playwright/test";

test("write alternative thoughts", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("link", { name: "head icon representing" }).click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page.getByRole("button", { name: "Start" }).first().click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/choose-negative-thought"
  );
  await page.getByRole("button", { name: "Ignore" }).click();
  await page.getByPlaceholder("Write here...").click();
  await page
    .getByPlaceholder("Write here...")
    .fill("this is my negative thought");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Write here...").click();
  await page
    .getByPlaceholder("Write here...")
    .fill("this is my positive thought");
  await page.getByRole("button", { name: "Continue" }).click();
});

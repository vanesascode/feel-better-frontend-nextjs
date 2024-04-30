import { test, expect } from "@playwright/test";

test("footer links", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page.goto("http://localhost:3001/en/login");
  await expect(page).toHaveURL("http://localhost:3001/en/login");
  await page.goto("http://localhost:3001/en/learn");
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
  await page.goto("http://localhost:3001/en/practice");
  await expect(page).toHaveURL("http://localhost:3001/en/practice");
  await page.goto("http://localhost:3001/en/register");
  await expect(page).toHaveURL("http://localhost:3001/en/register");
  await page.goto("http://localhost:3001/en/meditation-info");
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page.goto("http://localhost:3001/en/challenge-thoughts-info");
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page.goto("http://localhost:3001/en/conditions");
  await expect(page).toHaveURL("http://localhost:3001/en/conditions");
  await page.goto("http://localhost:3001/en/cookies-policy");
  await expect(page).toHaveURL("http://localhost:3001/en/cookies-policy");
});

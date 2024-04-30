import { test, expect } from "@playwright/test";

test("try all links in home page", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("button", { name: "Start" }).click();
  await page
    .getByRole("link", { name: "head icon representing thoughts" })
    .click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page
    .getByRole("button", { name: "FeelBetter" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page
    .getByRole("link", { name: "meditation icon Do a guided meditation" })
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page
    .getByRole("button", { name: "FeelBetter" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page
    .getByRole("link", { name: "learn icon Learn about chronic pain" })
    .click();
  await page
    .getByRole("button", { name: "FeelBetter" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page
    .locator("article")
    .filter({
      hasText: "Challenge negative thoughts.",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page
    .getByRole("button", { name: "FeelBetter" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page
    .locator("article")
    .filter({
      hasText: "Meditation contributes to",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page
    .getByRole("button", { name: "FeelBetter" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
  await page
    .locator("article")
    .filter({
      hasText: "Learn about chronic",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
});

test("test", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("button", { name: "Start" }).click();
  await page.getByRole("link", { name: "head icon representing" }).click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await page
    .getByRole("link", { name: "meditation icon representing" })
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await page.getByRole("link", { name: "learn icon representing" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await page
    .locator("article")
    .filter({
      hasText:
        "Challenge negative thoughts. As you interrupt the spiral of negative thoughts",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL(
    "http://localhost:3001/en/challenge-thoughts-info"
  );
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await page
    .locator("article")
    .filter({
      hasText:
        "Do a guided meditation. Meditation contributes to the formation of new neural",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/meditation-info");
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await page
    .locator("article")
    .filter({
      hasText:
        "Learn about chronic pain. Understanding chronic pain provides you with tools",
    })
    .getByRole("button")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
  await page
    .getByLabel("Button to go home")
    .getByRole("link", { name: "FeelBetter" })
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en");
});

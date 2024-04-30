import { test, expect } from "@playwright/test";

test("open close dropdowns", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Learn" })
    .click();
  await page.locator(".md\\:h-6").first().click();
  await page.locator("div:nth-child(10) > .md\\:h-6").click();
  await page.locator("div:nth-child(9) > .md\\:h-6").click();
  await page.locator("div:nth-child(8) > .md\\:h-6").click();
  await page.locator(".bg-cta-green > .md\\:h-6").first().click();
  await page.locator(".bg-dark-green-1 > .md\\:h-6").first().click();
  await page.locator(".md\\:h-6").first().click();
  await page.locator(".bg-dark-green-1 > .md\\:h-6").first().click();
  await page
    .locator("div")
    .filter({ hasText: "Pain occurs in the nervous" })
    .first()
    .click();
  await page.getByText("What else can I do to feel").click();
  await page
    .locator("div")
    .filter({ hasText: "It is important to lose the" })
    .first()
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
});

test("open close bibliography", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Learn" })
    .click();
  await page.getByText("Bibliography").click();
  await page.getByText("Bibliography").click();
  await page
    .locator("div")
    .filter({ hasText: "Bibliography" })
    .locator("svg")
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Bibliography" })
    .locator("svg")
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
});

test("open close bibliography and dropdowns, and leave and return to learn page", async ({
  page,
}) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Learn" })
    .click();
  await page.getByText("Bibliography").click();
  await page.getByText("Bibliography").click();
  await page.locator("div:nth-child(9) > .md\\:h-6").click();
  await page.locator("div:nth-child(9) > .md\\:h-6").click();
  await page
    .locator("div")
    .filter({ hasText: "It is important to lose the" })
    .first()
    .click();
  await page
    .locator("div")
    .filter({ hasText: "It is important to lose the" })
    .first()
    .click();
  await page.getByRole("main").getByRole("button").click();
  await page.getByRole("heading", { name: "learn about chronic pain" }).click();
  await page.getByRole("link", { name: "Register" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Learn" })
    .click();
  await expect(page).toHaveURL("http://localhost:3001/en/learn");
});

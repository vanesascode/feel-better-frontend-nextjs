import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByPlaceholder("example@example.com").click();
  await page.getByPlaceholder("example@example.com").fill("namotoninja");
  await page.getByPlaceholder("example@example.com").press("Alt+#");
  await page
    .getByPlaceholder("example@example.com")
    .fill("namotoninja@gmail.com");
  await page.getByPlaceholder("example@example.com").press("Tab");
  await page.getByPlaceholder("password").fill("kaitakaita");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page).toHaveURL("http://localhost:3001/en");
});

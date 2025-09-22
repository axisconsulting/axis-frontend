import { test, expect } from "@playwright/test";

// TODO: MOVE INTO DEMO FOLDER LATER
test("home page renders and links work", async ({ page }) => {
   await page.goto("/");
   await expect(page.getByRole("heading", { name: /vite \+ react/i })).toBeVisible();
   await page.getByRole("link", { name: /about/i }).click();
   await expect(page.getByRole("heading", { name: /about/i })).toBeVisible();
});

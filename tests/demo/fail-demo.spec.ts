// tests/fail-demo.spec.ts
import { test, expect } from "@playwright/test";

test("force a failure to see artifacts", async ({ page }) => {
   await page.goto("/");
   await expect(page.getByRole("heading", { name: "Definitely Not There" })).toBeVisible();
});

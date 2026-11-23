import { test, expect } from "@playwright/test";
import { ROUTES } from "../src/constants/routes";

// LinkedIn blocks automated requests (HTTP 999) for real and fake profiles alike,
// so this checks the rendered href is a well-formed LinkedIn URL.
const LINKEDIN_URL = /^https:\/\/(www\.)?linkedin\.com\/(in|company|school)\/[^/\s]+\/?$/;

test("all LinkedIn links are valid", async ({ page }) => {
   const problems = new Set<string>();

   for (const path of Object.values(ROUTES)) {
      await page.goto(path);
      await page.waitForLoadState("networkidle");

      const hrefs = await page
         .locator('a[href*="linkedin"]')
         .evaluateAll((links) => links.map((a) => a.getAttribute("href") ?? ""));
      for (const href of hrefs) {
         if (!LINKEDIN_URL.test(href)) problems.add(`[${path}] "${href}"`);
      }
   }

   const list = [...problems].sort();
   expect(list, `${list.length} bad LinkedIn link(s):\n${list.join("\n")}`).toEqual([]);
});

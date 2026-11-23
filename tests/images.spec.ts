import { test, expect } from "@playwright/test";
import { ROUTES } from "../src/constants/routes";

// Checks every image on every page is served by Cloudflare (R2) or public/.
// All problems are collected so a broken deploy produces one failure, not dozens.
test("all images load", async ({ page, request }) => {
   test.setTimeout(120_000);
   const imageToPage = new Map<string, string>();

   for (const path of Object.values(ROUTES)) {
      await page.goto(path);
      await page.waitForLoadState("networkidle");

      // Read the src of every <img>, including lazy ones that haven't scrolled into view
      const srcs = await page.locator("img").evaluateAll((imgs) => imgs.map((img) => (img as HTMLImageElement).src));
      for (const src of srcs) if (!imageToPage.has(src)) imageToPage.set(src, path);
   }

   const problems: string[] = [];
   await Promise.all(
      [...imageToPage].map(async ([src, path]) => {
         try {
            const res = await request.get(src);
            const type = res.headers()["content-type"] ?? "";
            if (!res.ok()) problems.push(`[${path}] HTTP ${res.status()}: ${src}`);
            else if (!type.startsWith("image/")) problems.push(`[${path}] Not an image (${type}): ${src}`);
         } catch (err) {
            problems.push(`[${path}] ${(err as Error).message.split("\n")[0]}: ${src}`);
         }
      })
   );

   problems.sort();
   expect(problems, `${problems.length} broken image(s):\n${problems.join("\n")}`).toEqual([]);
});

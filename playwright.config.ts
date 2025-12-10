import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
   testDir: "./tests", // Where your tests live
   outputDir: "test-results", // Where artifacts (screenshots, videos, traces) are saved

   // Ignore everything in tests/demo/**
   //    testIgnore: ["tests/demo/**"],

   // playwright-report config
   reporter: [["html", { outputFolder: "playwright-report", open: "never" }], ["line"]],

   // Max time per test (ms)
   timeout: 30_000,

   // Retry once so traces are captured on the retry below
   retries: 1,

   // Max time for expect() assertions to eventually pass (ms)
   expect: { timeout: 5_000 },

   // Start your app before tests and wait for it
   webServer: {
      command: "bun run build && bun run preview",
      url: "http://localhost:4173", // vite preview default port
      reuseExistingServer: !process.env.CI, // don’t restart if already running (local)
      timeout: 90_000,
   },

   // Default “browser context” settings for all tests
   use: {
      baseURL: "http://localhost:4173",
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      trace: "on-first-retry", // record a trace if a test retries
   },

   // Run the same tests in multiple browsers / device profiles
   projects: [
      { name: "chromium", use: { ...devices["Desktop Chrome"] } },
      //   { name: "firefox", use: { ...devices["Desktop Firefox"] } },
      //   { name: "webkit", use: { ...devices["Desktop Safari"] } },
   ],
});

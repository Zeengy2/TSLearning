import { basePortalPage } from "./pages/base-page"
const { test, expect } = require("@playwright/test");

test("login to the portal", async ({ page }) => {
  const basePage = new basePortalPage(page)

  await basePage.goto()
  await basePage.login()
});

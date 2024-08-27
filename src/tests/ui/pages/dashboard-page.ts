import { expect, Locator, Page } from "@playwright/test";

export class loginPage {
  readonly page: Page;

  readonly headerText: Locator;

  readonly loginButton: Locator;

  readonly password: Locator;
  readonly loginField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerText = page.locator("span", { hasText: "Welcome" });
    this.loginButton = page.locator("button", {
      hasText: "Login",
      hasNotText: "Login with GitHub",
    });
    this.password = page.locator('//input[@type="password"]')
  }

  async goto() {
    await this.page.goto("https://demo.reportportal.io/");
    expect(this.headerText.isVisible());
  }

  async login() {
    expect(this.loginButton.isVisible())
    expect(this.password)
    await this.loginButton.click();
  }
}

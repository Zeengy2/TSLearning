import { expect, Locator, Page } from "@playwright/test";
import 'dotenv/config'

export class basePortalPage {
  readonly page: Page;
  
  readonly loginButton: Locator;

  readonly dashboardsTab: Locator;
  readonly launchesTab: Locator;
  readonly filtersTab: Locator;

  readonly passwordField: Locator;
  readonly loginField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByText('Login', {exact: true});
    this.dashboardsTab = page.locator('//div[@tabindex=1]');
    this.launchesTab = page.locator('//div[@tabindex=2]');
    this.filtersTab = page.locator('//div[@tabindex=3]');
    this.passwordField = page.locator('//input[@type="password"]')
    this.loginField = page.locator('//input[@type="text"]')
  }

  async goto() {
    await this.page.goto("https://demo.reportportal.io/");
  }

  async login() {
    await this.loginField.fill('default')
    await this.passwordField.fill('1q2w3e')
    await this.loginButton.click();
  }
}

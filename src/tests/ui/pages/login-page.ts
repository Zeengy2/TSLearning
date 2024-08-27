import { expect, Locator, Page } from "@playwright/test";
import 'dotenv/config'

export class loginPage {
  readonly page: Page;

  readonly headerText: Locator;

  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerText = page.locator('//span[text()="Welcome,"]');
    this.loginButton = page.getByText('Login', {exact: true});
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login() {
    expect(this.loginButton.isVisible())
    await this.loginButton.click();
  }
}

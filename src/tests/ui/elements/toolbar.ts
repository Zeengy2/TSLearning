import { expect, Locator, Page } from "@playwright/test";
import 'dotenv/config'

export class toolBar {
  readonly dashboardsTab: Locator;
  readonly launchesTab: Locator;
  readonly filtersTab: Locator;

  constructor(page: Page) {
    this.dashboardsTab = page.locator('//div[@tabindex=1]');
    this.launchesTab = page.locator('//div[@tabindex=2]');
    this.filtersTab = page.locator('//div[@tabindex=3]');
  }
}

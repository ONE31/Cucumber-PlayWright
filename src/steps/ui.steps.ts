import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
//import findUp from 'find-up';
import { env } from 'process';
//dotenv.config({ path: findUp.findUpSync('.env') });
dotenv.config();



Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('nav >> a >> text="Playwright"').waitFor();
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const html = page.locator('html');
  const current = await html.getAttribute('data-theme');
  if (current !== mode) {
    await page.locator('nav >> button[title*="dark and light mode"]').click();
  }
  await page.waitForSelector(`html[data-theme=${mode}]`);
});

Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const theme = await page.locator('html').getAttribute('data-theme');
  expect(theme).toEqual(mode);
});

Given('Go to the BASE_URL website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

Given('Go to the new website', async function (this: ICustomWorld) {
  const ui: string = env.TEST_URI as string;
  const page = this.page!;
  await page.goto(ui);
});

Then(
  'I locate an element using selector {string} and ensure the text is {string}',
  async function (this: ICustomWorld, selector: string, title: string) {
    const page = this.page!;
    const activeText = await page.locator(selector).textContent();
    expect(activeText).toEqual(title);
  },
);

Then(
  'I locate an element using selector {string} and click on it',
  async function (this: ICustomWorld, selector: string) {
    const page = this.page!;
    await page.locator(selector).click;
  },
);

Then(
  'Text {string} is presented on the screen',
  async function (this: ICustomWorld, expectedText: string) {
    const page = this.page!;
    const activeText = await page.locator(expectedText).textContent();
    expect(activeText).toEqual(expectedText);
  },
);

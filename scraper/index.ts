import puppeteer, { Browser, Page } from 'puppeteer';

const URL = 'https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/';

export class LeetCode {
  browser: Browser | null = null;
  page: Page | null = null;
  async initialize() {
    this.browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
    })
    this.page = await this.browser?.newPage();
  }
}

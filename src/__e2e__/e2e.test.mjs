import puppeteer from 'puppeteer'
import {nonHeadless} from '../test-utils/puppeteer-options.mjs'

(async () => {
  const browser = await puppeteer.launch(nonHeadless);
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

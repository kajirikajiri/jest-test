/**
 * @ is-environment jest-puppeteer
 */

test('should be titled "Google"', () => {
  (async () => {
    await page.goto("https://google.com");
    await expect(page.title()).resolves.toMatch("Google");
  })();
});

// test.js
const timeout = 5000;

describe(
  "/ (Home Page)",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("https://google.com");
      await page.goto("http://127.0.0.1:3000");
    }, timeout);

    it("should load without error", async () => {
      await page.evaluate(() => {
        const elements = document.querySelectorAll("[data-test=square]");
        for (const element of elements) {
          element.click();
        }
      });
      await page.evaluate(() => {
        const elements = document.querySelectorAll("[data-test=square]");
        for (const element of elements) {
          console.log(element);
        }
      });
      const message = await page.evaluate(() => {
        const element = document.querySelector("[data-test=gameStatus]");
        if (element.innerText !== "winner: X") {
          return "error";
        }
        return "success";
      });
      console.log(message);
      // const text = await page.evaluate(() => document.body.textContent);
      // expect(text).toContain("google");
    });
  },
  timeout
);

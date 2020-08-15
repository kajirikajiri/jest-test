// test.js
const timeout = 5000;

describe(
  "",
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto("http://127.0.0.1:3000");
    }, timeout);

    it("winner x", async () => {
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
    });
  },
  timeout
);

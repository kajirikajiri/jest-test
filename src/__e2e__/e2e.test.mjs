import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({path: 'example.png'});
  await page.evaluate(() => {
    const elements = document.querySelectorAll('[data-test=square]')
    for (element of elements){
      element.click()
    }
  })
  await page.evaluate(() => {
    const elements = document.querySelectorAll('[data-test=square]')
    for (element of elements){
      console.log(element)
    }
  })
  const message = await page.evaluate(() => {
    const element = document.querySelector('[data-test=gameStatus]')
    if(element.innerText !== 'winner: X'){
      return 'error'
    }
    return 'success'
  })
  console.log(message)
  await browser.close();
})();

const puppeteer = require("puppeteer");
const mkdirp = require("mkdirp");
const path = require("path");
const fs = require("fs");
const os = require("os");

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup");

let e2eHeadFull = false;
process.argv.forEach((arg) => {
  if (arg === "-e2e-head-full") e2eHeadFull = true;
});

const headless = e2eHeadFull ? false : true;

module.exports = async function () {
  const browser = await puppeteer.launch({ headless });
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser;

  // use the file system to expose the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, "wsEndpoint"), browser.wsEndpoint());
};

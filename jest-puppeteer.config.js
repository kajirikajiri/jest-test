const headless = false;
module.exports = {
  launch: {
    dumpio: true,
    headless: headless ? true : false,
    executablePath: headless ? "/usr/bin/chromium" : "/usr/bin/google-chrome",
  },
  browserContext: "default",
};

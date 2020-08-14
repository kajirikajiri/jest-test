export const headless = {
  executablePath: "/usr/bin/chromium",
  headless: true,
  ignoreDefaultArgs: ["--disable-extensions"],
  args: [
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-setuid-sandbox",
    "--no-first-run",
    "--no-sandbox",
    "--no-zygote",
    "--single-process",
  ],
};

export const nonHeadless = {
  executablePath: "/usr/bin/google-chrome",
  headless: false,
};

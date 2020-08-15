let e2e = false;
process.argv.forEach((arg) => {
  if (arg === "-e2e" || arg === "-e2e-head-full") e2e = true;
});
module.exports = {
  moduleFileExtensions: ["ts", "js", "tsx"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  testMatch: e2e
    ? ["**/__e2e__/**/*.[jt]s?(x)"]
    : ["**/__tests__/**/*.[jt]s?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  globalSetup: e2e ? "./puppeteer-settings/setup.js" : "",
  globalTeardown: e2e ? "./puppeteer-settings/teardown.js" : "",
  testEnvironment: e2e ? "./puppeteer-settings/puppeteer_environment.js" : "",
};

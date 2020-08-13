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
  testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
};

module.exports = {
  rootDir: "./src",
  transform: {
    "^.+\\.(js)x?$": "js-jest"
  },
  testPathIgnorePatterns: ['/node_modules/', '/src/context/__mocks__'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(jsx|js)$',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  "moduleNameMapper": {
    "^@context(.*)$": "<rootDir>/src/context$1"
  }
};
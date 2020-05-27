module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^src(.*)$': '<rootDir>/src$1',
  },

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>'
  ],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    ".*": "babel-jest"
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/"
  ],
};

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/tests/**/*.js', '**/tests/**/*.ts'],
  testPathIgnorePatterns: ['/helpers/', '/setup.js'],
  collectCoverageFrom: ['src/**/*.ts', '!src/index.minimal.ts'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '\\.(ts)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};

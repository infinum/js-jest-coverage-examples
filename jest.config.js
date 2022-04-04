// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testPathIgnorePatterns: [
    '<rootDir>/src/test.ts'
  ],
  collectCoverageFrom: [
    './src/app/**/*.(ts|js)',
    '!./src/app/testing/**',
    '!./src/**/*.spec.(ts|js)',
    '!./src/**/*.testing.*.(ts|js)',
    '!./src/**/*.module.(ts|js)',
  ],
};

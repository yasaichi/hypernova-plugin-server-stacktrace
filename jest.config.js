module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coverageReporters: ['lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node'
};

export default {
  transform: {
      '^.+\\.jsx?$': 'babel-jest', 
  },
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'], 
  moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', 
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node']
};
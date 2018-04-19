module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '\\.*.(tsx?)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/jest_stubs/style-module.js',
    '\\.(jpg|png)$': '<rootDir>/jest_stubs/empty-module.js',
    '^APIS/(.*)': '<rootDir>/src/apis/$1',
    '^COMPONENTS/(.*)': '<rootDir>/src/components/$1',
    '^DUCKS/(.*)': '<rootDir>/src/ducks/$1',
    '^STORE/(.*)': '<rootDir>/src/store/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};

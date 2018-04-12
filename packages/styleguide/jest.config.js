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
    '\\.(css|less)$': '<rootDir>/styleMock.js',
    '\\.(jpg|png)$': '<rootDir>/empty-module.js',
    '^APIS/(.*)': '<rootDir>/src/apis/$1',
    '^COMPONENTS/(.*)': '<rootDir>/src/components/$1',
    '^DUCKS/(.*)': '<rootDir>/src/ducks/$1',
    '^STORE/(.*)': '<rootDir>/src/store/$1',
    '^react$': '<rootDir>/node_modules/react', // HACK FOR SYMLINKS FROM LERNA
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

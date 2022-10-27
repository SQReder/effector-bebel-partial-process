const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('jest').Config} */
const config = {
    coveragePathIgnorePatterns: ['.styled.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
            babelConfig: '.babelrc.test.js',
        },
        API_PATH: '',
        FILE_API_PATH: '',
    },
    preset: 'ts-jest',
    moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    },
    testPathIgnorePatterns: ['.babelrc.test.js'],
};

module.exports = config;

const JEST_ALIAS_REPLACE_REGEX = /\*$/;
/**
 * Get the aliases for jest using the provided js config.
 *
 * @param {string} jsConfigPath The jsconfig path to load
 * @returns An object with the jest aliases for the moduleMapper
 */
function getJestAliases(jsConfigPath) {
  const jsConfig = require(jsConfigPath);
  const {
    compilerOptions: { paths },
  } = jsConfig;

  return Object.keys(paths).reduce((modules, alias) => {
    const jestAlias = `^${alias.replace(JEST_ALIAS_REPLACE_REGEX, '(.+)')}`;
    const jestPath = `<rootDir>${paths[alias][0].replace(
      JEST_ALIAS_REPLACE_REGEX,
      '$1'
    )}`;
    modules[jestAlias] = jestPath;
    return modules;
  }, {});
}

module.exports = {
  moduleNameMapper: {
    '\\.s[ac]ss$': '<rootDir>/__mocks__/styleMock.js',
    '\\.jpg$': '<rootDir>/__mocks__/imagesMock.js',
    ...getJestAliases('./jsconfig.json'),
  },
  setupFiles: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: ['src/**/*.js(x)?'],
};

const webpackConfigTemplate = require('../../webpack.config.template');
const lessModifyVars = require('./less-modify-vars');

module.exports = (env) => {
  const template = webpackConfigTemplate({
    env,
    lessModifyVars,
    rootDir: __dirname,
  });
  const config = {
    ...template,
    // PUT OVERRIDES HERE
  };
  return config;
};

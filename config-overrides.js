const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.md$/,
    use: 'raw-loader',
  })
);

const { override } = require('customize-cra');

console.log("Applying config-overrides.js...");

module.exports = override();
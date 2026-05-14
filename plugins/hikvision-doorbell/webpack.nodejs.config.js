const config = require(process.env.SCRYPTED_DEFAULT_WEBPACK_CONFIG);

const tsRule = config.module.rules.find(rule => rule.loader === 'ts-loader');
if (tsRule) {
    tsRule.options = {
        ...(tsRule.options || {}),
        transpileOnly: true,
    };
}

module.exports = config;

'use strict';

var plugins = require('./plugins.json');

function getRuleURI(ruleId) {
  if (typeof ruleId !== 'string') {
    throw new TypeError(`ruleId must be a string, got ${typeof ruleId}`);
  }

  var ruleParts = ruleId.split('/');

  if (ruleParts.length === 1) {
    return {
      found: true,
      url: 'http://eslint.org/docs/rules/' + ruleId
    };
  }

  var pluginName = ruleParts[0];
  var ruleName = ruleParts[1];
  var url = plugins[pluginName];

  if (url.indexOf('/') === -1) {
    url += '/eslint-plugin-' + pluginName;
  }
  if (url.split('/').length === 2) {
    url = 'https://github.com/' + url + '/blob/master/docs/rules/RULENAME.md';
  }

  if (!url) {
    return {
      found: false,
      url: 'https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md'
    };
  }

  return {
    found: true,
    url: url.replace('RULENAME', ruleName)
  };
}

module.exports = getRuleURI;

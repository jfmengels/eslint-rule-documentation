import fs from 'fs';
import test from 'ava';
import getRuleURI from './';

test('should return url of core rules', t => {
  t.deepEqual(getRuleURI('no-var'),
    {
      found: true,
      url: 'http://eslint.org/docs/rules/no-var'
    });
  t.deepEqual(getRuleURI('no-console'),
    {
      found: true,
      url: 'http://eslint.org/docs/rules/no-console'
    });
  t.deepEqual(getRuleURI('array-callback-return'),
    {
      found: true,
      url: 'http://eslint.org/docs/rules/array-callback-return'
    });
});

test('should return url of found plugin rules', t => {
  t.deepEqual(getRuleURI('import/order'),
    {
      found: true,
      url: 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md'
    });
  t.deepEqual(getRuleURI('import/no-unresolved'),
    {
      found: true,
      url: 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md'
    });

  t.deepEqual(getRuleURI('ava/no-identical-title'),
    {
      found: true,
      url: 'https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-identical-title.md'
    });
  t.deepEqual(getRuleURI('ava/no-todo-test'),
    {
      found: true,
      url: 'https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-test.md'
    });
  t.deepEqual(getRuleURI('eslint-comments/no-unlimited-disable'),
    {
      found: true,
      url: 'https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md'
    });
  t.deepEqual(getRuleURI('promise/no-native'),
    {
      found: true,
      url: 'https://github.com/xjamundx/eslint-plugin-promise#no-native'
    });
  t.deepEqual(getRuleURI('promise/catch-or-return'),
    {
      found: true,
      url: 'https://github.com/xjamundx/eslint-plugin-promise#catch-or-return'
    });
  t.deepEqual(getRuleURI('standard/array-bracket-even-spacing'),
    {
      found: true,
      url: 'https://github.com/xjamundx/eslint-plugin-standard#rules-explanations'
    });
});

test.cb('should be able to parse `plugin.json`', t => {
  fs.readFile('./plugins.json', 'utf8', (err, content) => {
    t.falsy(err);
    t.truthy(content);
    const parsedContent = JSON.parse(content);
    t.true(typeof parsedContent === 'object');
    t.end();
  });
});

test('should return url to help improve this tool', t => {
  t.deepEqual(getRuleURI('unknown-foo/bar'),
    {
      found: false,
      url: 'https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md'
    });
});

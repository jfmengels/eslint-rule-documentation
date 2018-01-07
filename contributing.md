# Add support for a new plugin

You may have arrived here after clicking on a rule name from a linting error message or a different tool. If so, you may have expected to find the documentation of a rule. Unfortunately, it is likely that the rule originated from an ESLint plugin that doesn't specify where it's own documentation is, or that is unknown to this tool.

In order to improve the tool you were using and improve others, your help would be very valuable.

## How you can help

The best way you can help is to file an issue or submit a PR to the rule in
question asking them to support the `rule.meta.docs.url` property on their rule.
This was added in [ESLint v4.15.0][]
and provides a location where the entire ESLint ecosystem can get to the location
of the rule's documentation.

This package will continue to be maintained for rules that haven't updated to
specify their own location though, so if you would like to add support here in
`eslint-rule-documentation` you can submit a pull request.

You'll need a [GitHub account][join github]!

1. Find out where the documentation for the rules of the plugin are located. Find the plugin on `npm`, then the location of the repository, then try to find out the generic URL for rule documentation. Very often, it is at `https://github.com/USERNAME/eslint-plugin-PLUGINNAME/blob/master/docs/rules/RULENAME.md`.
2. Edit `plugins.json`, the file containing the list of supported plugins, by clicking [this link][edit plugins].
3. Add a new entry for your plugin, using the link found in step 1, containing `RULENAME`as a placeholder for the name of the rule.
   - If the author uses the standard convention of hosting the documentation at `https://github.com/USERNAME/eslint-plugin-PLUGINNAME/blob/master/docs/rules/RULENAME.md`, then you can just put `"PLUGINNAME": "USERNAME",` in `plugins.json`. ([Example][import])
   - If the author did not follow the repository naming convention outlined above, but still puts the rule documentation in `docs/rules/RULENAME.md`, then you can put `"PLUGINNAME": "USERNAME/REPONAME",` in `plugins.json`. ([Example][xo])
   - If the author does not follow the convention for rule placement, then you must specify the path for the documentation.<br />
     For example, if the rules for `eslint-plugin-foo` are documented under headings in `README.md`, you should specify that with `https://github.com/author/eslint-plugin-foo#RULENAME`, where `RULENAME` will get replaced with the name of the rule to open. ([Example][mozilla])
4. In the bottom-field, add a title like `Add support for eslint-plugin-XYZ`, maybe add a little message, and then click on submit.

Thanks a lot for doing this! If you have any trouble with these steps, please describe your problem in a [new Issue][], and we'll try to help you for the last bit, or do it ourselves.

[ESLint v4.15.0]: https://eslint.org/blog/2018/01/eslint-v4.15.0-released
[join github]: https://github.com/join
[edit plugins]: https://github.com/jfmengels/eslint-rule-documentation/edit/master/plugins.json
[import]: https://github.com/jfmengels/eslint-rule-documentation/blob/9ddb2c9e6e4fc9e89518ac69fefd97fc9d79904b/plugins.json#L13
[xo]: https://github.com/jfmengels/eslint-rule-documentation/blob/9ddb2c9e6e4fc9e89518ac69fefd97fc9d79904b/plugins.json#L38
[mozilla]: https://github.com/jfmengels/eslint-rule-documentation/blob/9ddb2c9e6e4fc9e89518ac69fefd97fc9d79904b/plugins.json#L24
[new Issue]: https://github.com/jfmengels/eslint-rule-documentation/issues/new

# Add support for a new plugin

You may have arrived here after clicking on a rule name from a linting error message or a different tool. If so, you may have expected to find the documentation of a rule. Unfortunately, it is likely that the rule originated from an ESLint plugin that is unknown to this tool.

In order to improve the tool you were using and improve others, your help would be very valuable.

## How you can help

You can submit a pull request to add support for a plugin.

But the documentation for plugin rules are not on that page, so there's no simple way for us to link to them automatically. That's where you come in.

You'll need a [GitHub account](https://github.com/join)!

1. Go edit the page containing the list of supported plugins by clicking [this link](https://github.com/jfmengels/eslint-rule-documentation/edit/master/plugins.json).
2. Find out where the documentation for the rules of the plugin are located. Find the plugin on `npm`, then the location of the repository, then try to find out the generic url for rule documentation. Very often, it is at `https://github.com/USERNAME/eslint-plugin-PLUGINNAME/blob/master/docs/rules/RULENAME.md`.
3. Add a new entry for your plugin, using the link in step 2, containing `RULENAME`as a placeholder for the name of the rule.
Example: For `eslint-plugin-foobar`, whose documentation files are Markdown files in `https://github.com/theauthor/eslint-plugin-foobar/blob/master/docs/rules/`, add a new entry of the form:
  - `"foobar": "https://github.com/theauthor/eslint-plugin-foobar/blob/master/docs/rules/RULENAME.md"`
4. In the bottom-field, add a title like `Add support for eslint-plugin-XYZ`, maybe add a little message, and then click on submit.

Thanks a lot for doing this! If you have any trouble with some step, do whatever you can, then describe your problem in the issue, and we'll try to help you for the last bit, or do it ourselves.

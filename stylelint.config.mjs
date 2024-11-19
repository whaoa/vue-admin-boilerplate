/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-hudochenkov/full',
  ],
  rules: {
    'selector-max-id': null,
    'selector-max-type': null,
    'selector-no-qualifying-type': null,
    'value-keyword-case': null,
    'alpha-value-notation': ['number'],
    'color-function-notation': ['legacy'],
    'custom-property-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'config',
          'apply',
          'theme',
        ],
      },
    ],
  },
};

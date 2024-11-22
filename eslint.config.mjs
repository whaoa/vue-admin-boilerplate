import eslint from '@antfu/eslint-config';

export default eslint(
  {
    vue: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  },

  {
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
    ],
  },

  // override rules
  {
    files: ['**/*.{js,ts,jsx,tsx,mjs,mts,vue}'],
    rules: {
      'curly': ['error', 'all'],
      'no-unused-vars': 'off',
      'style/max-len': [
        'error',
        {
          code: 100,
          ignoreComments: false,
          ignoreTrailingComments: false,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'style/arrow-parens': ['error', 'always'],
      'style/jsx-quotes': ['error', 'prefer-double'],
      'style/multiline-ternary': ['error', 'always-multiline', { ignoreJSX: true }],
      'style/no-confusing-arrow': ['error'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/order': 'off',
      'ts/no-unused-vars': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          newlinesBetween: 'always',
          sortSideEffects: false,
          internalPattern: ['~/**'],
          customGroups: {
            value: {
              '@custom/bundler': [
                'vite',
                '@vitejs/**',
                'vite-plugin-*',
                'vite-plugin-*/**',
                'unplugin-*',
                'unplugin-*/**',
              ],
              '@custom/vue': [
                'vue',
                'pinia',
                'naive-ui',
                'vue-*',
                '@vueuse/*',
              ],
            },
          },
          groups: [
            'builtin',
            ['@custom/bundler', '@custom/vue'],
            'external',
            'internal',
            'object',
            ['parent', 'sibling', 'index'],
            ['side-effect', 'side-effect-style'],
            ['builtin-type', 'external-type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
            'unknown',
          ],
        },
      ],
    },
  },

  // for .vue files
  {
    files: ['**/*.vue'],
    rules: {
      // use `vue/max-len` instead `style/max-len`
      'style/max-len': 'off',
      'vue/max-len': [
        'error',
        {
          code: 100,
          template: 100,
          tabWidth: 2,
          comments: 100,
          ignoreComments: false,
          ignoreTrailingComments: false,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreHTMLTextContents: false,
          ignoreHTMLAttributeValues: true,
        },
      ],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      // https://vuejs.org/style-guide/rules-strongly-recommended.html#component-name-casing-in-templates
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/define-props-declaration': ['error', 'runtime'],
      'vue/define-emits-declaration': ['error', 'type-literal'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
          defineExposeLast: true,
        },
      ],
    },
  },

  // other files
  {
    files: ['tsconfig.json'],
    rules: {
      'jsonc/sort-keys': 'off',
    },
  },
  {
    files: ['*.md'],
    rules: {
      'style/max-len': 'off',
    },
  },
);

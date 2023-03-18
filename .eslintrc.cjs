module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports',
    'vitest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    /* import */
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/stores/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/providers/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/constants/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/libs/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*', '../*', '~/*', '~~/*'],
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            from: [
              './src/stores',
              './src/components/page',
              './src/components/feature',
            ],
            target: './src/components/base',
          },
          {
            from: [
              './src/stores',
              './src/components/page',
              './src/components/feature',
            ],
            target: './src/components/functional',
          },
          {
            from: ['./src/components/page'],
            target: './src/components/feature',
          },
          {
            from: ['./src/components/page'],
            target: './src/components/page',
          },
          {
            from: [
              './src/components/feature',
              './src/components/functional',
              './src/components/base',
            ],
            target: './src/app/**/page.tsx',
          },
        ],
      },
    ],
    /* vitest */
    'vitest/consistent-test-it': [
      'error',
      {
        fn: 'test',
      },
    ],
    'vitest/expect-expect': 'warn',
    'vitest/lower-case-title': 'off',
    'vitest/max-nested-describe': [
      'error',
      {
        max: 2,
      },
    ],
    'vitest/no-conditional-tests': 'error',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-identical-title': 'error',
    'vitest/no-skipped-tests': 'warn',
  },
};

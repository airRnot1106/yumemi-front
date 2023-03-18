module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'vitest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
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

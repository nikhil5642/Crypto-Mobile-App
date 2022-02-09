const {pathGroups, pathGroupsExcludedImportTypes} = [
  ['react', 'external', 'before'],
  ['*react-native*', 'external', 'before'],
  ['@react-navigation/*', 'external', 'before'],
  ['react-*', 'external', 'before'],
].reduce(
  (acc, [pattern, group, position]) => ({
    pathGroups: [
      ...acc.pathGroups,
      {
        pattern,
        group,
        position,
      },
    ],
    pathGroupsExcludedImportTypes: [
      ...acc.pathGroupsExcludedImportTypes,
      pattern,
    ],
  }),
  {
    pathGroups: [],
    pathGroupsExcludedImportTypes: [],
  },
)

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/all',
    '@react-native-community',
    'prettier',
    'prettier/prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'no-undef': 'off',
    'no-shadow': 'off',
    'lines-between-class-members': ['warn', 'always'],
    semi: 'off',
    'no-void': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/valid-expect-in-promise': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/newline-after-import': 'warn',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'parent',
          'sibling',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups,
        pathGroupsExcludedImportTypes,
      },
    ],
  },
  settings: {
    'import/internal-regex': 'src/*',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
}

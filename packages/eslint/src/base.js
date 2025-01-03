module.exports = {
  extends: [
    'plugin:import/errors',
    'eslint:recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  'prettier/prettier': [
    'error',
    {
      singleQuote: false,
      semi: true,
      tabWidth: 3,
      useTabs: false,
      trailingComma: 'all',
      printWidth: 100,
      arrowParens: 'always',
      plugins: ['prettier-plugin-tailwindcss'],
    },
  ],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'import/no-unresolved': 'off',
  'import/prefer-default-export': 'off',
  'import/extensions': 'off',
};

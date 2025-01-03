module.exports = {
  plugin: ['@chanwoopark'],
  extends: ['plugin:@chanwoopark/base'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@chanwoopark/typescript'],
    },
    {
      files: ['**/*.{jsx,tsx}'],
      extends: ['plugin:@chanwoopark/react'],
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};

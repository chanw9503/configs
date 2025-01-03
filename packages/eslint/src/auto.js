module.exports = {
  plugin: ['@chanwoo'],
  extends: ['plugin:chanwoo/base'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@chanwoo/typescript'],
    },
    {
      files: ['**/*.{jsx,tsx}'],
      extends: ['plugin:@chanwoo/react'],
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Add this line
  ],
  rules: {
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
  },
};

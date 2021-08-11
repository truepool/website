module.exports = {
  'root': true,
  'overrides': [
    {
      files: ['*.ts'],
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['unused-imports'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'import/prefer-default-export': 'off',
        'prefer-destructuring': 'off',
        'no-return-assign': 'off',
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'arrow-body-style': 'off',
        'max-len': ['error', 120, 2],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', {
          vars: 'local',
          args: 'after-used',
          argsIgnorePattern: '^_$'
        }],
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-void': ['error', { 'allowAsStatement': true }],
        'class-methods-use-this': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        '@typescript-eslint/no-explicit-any': 'error',
      }
    }
  ],
};

// ESLint flat config for backend
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'package-lock.json',
      '*.min.js',
      'coverage/',
      'build/',
    ],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      jest: jest,
      import: importPlugin,
      prettier: prettier,
    },
    rules: {
      'no-shadow': 'error',
      'prettier/prettier': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-redeclare': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'global-require': 'warn',
      'handle-callback-err': 'warn',
      'no-buffer-constructor': 'warn',
      'no-new-require': 'warn',
      'no-path-concat': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'consistent-return': 'error',
      'no-unused-expressions': 'warn',
      'no-useless-constructor': 'warn',
    },
  },
]

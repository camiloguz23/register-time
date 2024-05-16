import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'no-console': 'error', // no console logs
      'react/react-in-jsx-scope': 'off', // react in jsx scope
      'no-cond-assign': 'error',
      semi: 'error', // ;
      'no-dupe-args': 'error', // arguments are not duplicated
      'no-duplicate-imports': 'error', // modules are not duplicated
      'no-func-assign': 'error', // functions are not reassigned
      'no-unused-vars': ['error', { args: 'none' }], // variables are not used
      'no-use-before-define': 'error', // variables are not defined before use
      'arrow-body-style': ['error', 'as-needed'], // arrow function body style
      'block-scoped-var': 'error', // block scoped variables
      eqeqeq: 'error', // === and !==
      'no-empty': 'error', // empty blocks
      'no-negated-condition': 'error', // negated conditions
      'no-unneeded-ternary': 'error', // ternary  more simple
      'no-var': 'error', // no var
      'prefer-object-spread': 'error', // prefer object spread {...object}
      'prefer-template': 'error', // prefer template string
      'require-await': 'error', // require await if is async function
      'consistent-return': 'error', // consistent return
      '@typescript-eslint/explicit-function-return-type': 'error' // explicit function return type
    },
    files: ['src/**/**.{ts,tsx,js,jsx}', 'src/**/*.{ts,tsx,js,jsx}', 'src/**/**/*.{ts,tsx,js,jsx}']
  }
];

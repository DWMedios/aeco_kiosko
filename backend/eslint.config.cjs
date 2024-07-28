const globals = require('globals');
const js = require('@eslint/js');
const pluginImport = require('eslint-plugin-import')

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2021, // ECMAScript version
      globals: globals.node
    },
    plugins: {
      import: pluginImport
    },
    rules: {
      indent: ['error', 2], // Indentación de 2 espacios
      'linebreak-style': ['error', 'unix'], // Estilo de salto de línea Unix
      quotes: ['error', 'single'], // Uso de comillas simples
      semi: ['error', 'never'], // No usar punto y coma
      'no-unused-vars': ['warn'], // Variables no usadas
      'no-console': 'off', // Permitir console.log
      strict: ['error', 'global'], // Requiere "use strict"
      'import/order': ['error', { // Ordenar imports
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups'
      }]
    }
  },
  // Configuración global
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  // Configuración recomendada por el plugin de ESLint
  js.configs.recommended
];

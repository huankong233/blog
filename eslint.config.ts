import config from '@pengzhanbo/eslint-config-vue'

export default config({
  regexp: false,
  ignores: ['**/node_modules/**', '**/code/*.ts', '**/在VsCode中优雅的编写Vue.md'],
}, [
  {
    files: ['**/*.md/**/*.{ts,js,vue,jsx,tsx}'],
    rules: {
      'prefer-regex-literals': 'off',
      'prefer-const': 'off',
      'no-proto': 'off',
      'no-restricted-properties': 'off',
      'ts/no-unsafe-function-type': 'off',
      'no-debugger': 'off',
      'no-new-func': 'off',
      'antfu/no-top-level-await': 'off',
      'ts/no-empty-object-type': 'off',
      'ts/ban-ts-comment': 'off',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
    },
  },
])

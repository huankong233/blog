import config from '@pengzhanbo/eslint-config-vue'

export default config({
  regexp: false,
  ignores: ['**/node_modules/**'],
}, [
  {
    files: ['**/*.{md,ts,js,vue,jsx,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },
])

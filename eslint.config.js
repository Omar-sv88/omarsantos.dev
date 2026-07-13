import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'

export default [
	{
		ignores: ['dist/**']
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		...js.configs.recommended,
		languageOptions: {
			globals: globals.node
		}
	},
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			'no-tabs': 'off'
		}
	}
]

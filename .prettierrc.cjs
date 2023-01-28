module.exports = {
	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss')
	],
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],
	endOfLine: 'lf',
	bracketSpacing: true,
	quoteProps: 'as-needed',
	arrowParens: 'always',
	htmlWhitespaceSensitivity: 'css',
	jsxBracketSameLine: false
}

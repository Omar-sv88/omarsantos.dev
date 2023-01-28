module.exports = {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	endOfLine: 'lf',
	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss'),
	],
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
}

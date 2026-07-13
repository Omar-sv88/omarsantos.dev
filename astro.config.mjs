import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://omarsantos.dev',
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		icon(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			serialize(item) {
				if (/\/blog\/.+/.test(item.url)) {
					return {
						...item,
						changefreq: 'never',
						priority: 0.5
					}
				}
				return item
			}
		})
	]
})

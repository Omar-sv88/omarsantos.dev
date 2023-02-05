import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://omarsantos.dev',
	integrations: [
		tailwind(),
		image(),
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

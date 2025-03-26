// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Federal Negarit Gazeta',
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: 'en',
				},
				am: {
					label: 'አማርኛ',
					lang: 'am',
				}
			},
			social: {
				github: 'https://github.com/miki-tebe/negarit-gazette-v2',
			},
			sidebar: [
				{
					label: 'Proclamations',
					autogenerate: { directory: 'proclamations'},
				},
			],
		}),
	],
});

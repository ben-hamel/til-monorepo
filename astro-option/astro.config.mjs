// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Today I Learned',
			logo: {
				src: './src/assets/favicon.svg',
			},
			lastUpdated: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'TIL', link: '/til/' },
				{
					label: 'Docker',
					collapsed: true,
					items: [{ autogenerate: { directory: 'docker' } }],
				},
				{
					label: 'Linux',
					collapsed: true,
					items: [
						{
							label: 'Fedora',
							collapsed: true,
							items: [{ autogenerate: { directory: 'linux/fedora' } }],
						},
					],
				},
			],
		}),
	],
});

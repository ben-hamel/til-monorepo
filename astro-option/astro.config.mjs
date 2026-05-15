// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://til.eastcoastdev.online',
	integrations: [
		starlight({
			title: 'Today I Learned',
			logo: {
				src: './src/assets/favicon.svg',
			},
			lastUpdated: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ben-hamel/til' }],
			sidebar: [
				{ label: 'TIL', link: '/til/' },
				{
					label: 'Dotfiles',
					collapsed: true,
					items: [{ autogenerate: { directory: 'dotfiles' } }],
				},
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
				{
					label: 'Bun',
					collapsed: true,
					items: [{ autogenerate: { directory: 'bun' } }],
				},
				{
					label: 'Windows',
					collapsed: true,
					items: [
						{
							label: 'WSL',
							collapsed: true,
							items: [{ autogenerate: { directory: 'windows/wsl' } }],
						},
					],
				},
			],
		}),
	],
});

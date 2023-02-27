import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: 'Project GiG',
				start_url: '.',
				display: 'standalone',
				background_color: '#fff',
				icons: [
					{
						src: 'icon.svg',
						sizes: '100x100',
						type: 'image/png',
					},
					{
						src: 'icon.svg',
						sizes: '200x200',
						type: 'image/png',
					},
				],
			},
		}),
	],
	server: {
		port: 3005,
	},
})

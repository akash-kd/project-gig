/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const postcss = require('postcss')
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif'],
			},
			spacing: {
				'5p': '5%',
				'8p': '8%',
				'10p': '10%',
				'20p': '20%',
				'30p': '30%',
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.heading': {
					fontFamily: 'Rubik, sans-serif',
					fontSize: '1.25rem',
					fontWeight: 'bold',
				},
			})
		}),
	],
}

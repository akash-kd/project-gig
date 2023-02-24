/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
	theme: {
		extend: {
			spacing: {
				'5p': '5%',
				'8p': '8%',
				'10p': '10%',
				'20p': '20%',
				'30p': '30%',
			},
		},
	},
	plugins: [],
}

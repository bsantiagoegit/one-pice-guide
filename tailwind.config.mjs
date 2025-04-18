/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-light': '#F4F6F9',
				'background-dark': '#23242E',
				100: '#EBEEF4',
				200: '#DAE0EB',
				300: '#C3CCDE',
				400: '#AAB4CF',
				500: '#9AA1C3',
				600: '#7D81AE',
				700: '#6B6F97',
				800: '#585B7B',
				900: '#4B4E64',
				950: '#2C2D3A',
			},
		},
	},
	plugins: [],
};

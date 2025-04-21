/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				charade: {
					50: '#f6f6f9', //--> White text color
					100: '#ecedf2', //--> Light background
					200: '#d6d7e1', // Button primary background color
					300: '#b2b4c7', // Button primary background hover color
					400: '#888ca8',
					500: '#696e8e',
					600: '#545775',
					700: '#45475f',
					800: '#3b3d51',
					900: '#2c2d3a',
					950: '#23242e', //--> Dark background - Black text color
				},
			},
		},
	},
	plugins: [],
};

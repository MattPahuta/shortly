/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cyan: 'hsl(180, 66%, 49%)',
				cyanLight: 'hsl(180, 56%, 75%)',
				darkViolet: 'hsl(257, 27%, 26%)',
				red: 'hsl(0, 87%, 67%)',
				lightGray: 'hsl(225, 32%, 95%)',
				gray: 'hsl(0, 0%, 75%)',
				grayishViolet: 'hsl(257, 7%, 63%)',
				veryDarkBlue: 'hsl(255, 11%, 22%)',
				veryDarkViolet: 'hsl(260, 8%, 14%)',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'shorten-mobile': "url('./src/images/bg-shorten-mobile.svg')",
				'shorten-desktop': "url('/src/images/bg-shorten-desktop.svg')",
			}
		},
	},
	plugins: [],
}

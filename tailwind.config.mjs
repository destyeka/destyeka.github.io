/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        fontFamily: {
            sans: ['"Hanken Grotesk"', 'sans-serif'],
        },
		extend: {
            colors: {
                'brand-orange': '#FD825F',
            },
        },
	},
	plugins: [],
}
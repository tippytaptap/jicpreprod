import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
		extend: {
			borderRadius: { lg: '0.5rem', md: 'calc(0.5rem - 2px)', sm: 'calc(0.5rem - 4px)' },
			fontFamily: { sans: ['Inter','system-ui','sans-serif'], serif: ['Georgia','serif'] }
		}
	},
	plugins: [tailwindcssAnimate],
};
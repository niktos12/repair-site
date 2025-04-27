/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1620px',
        'megasm':'560px',
        'xsm':'425px',
        'xs': '320px',
      },
    },
  },
  plugins: [],
}

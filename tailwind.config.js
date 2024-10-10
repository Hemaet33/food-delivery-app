/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // Include all React component files
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brand-color': 'var(--bg-brand-primary)',
        'brand-secondary': 'var(--bg-brand-secondary)',
      },
      textColor:{
        active:"var(--active-color)",
      },
      fontFamily: {
         'lato': ['Lato', 'sans-serif'],
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '700': '700',
        '900': '900',
      },
    },
  },
  plugins: [],
}

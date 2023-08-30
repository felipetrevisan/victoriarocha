/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pagination: {
          '0%, 100%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.1)' },
        },
        border: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      zIndex: {
        'modal': 1000
      },
      backgroundImage: {
        'app': 'url("/assets/bg.jpg")',
        'divider': 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
        'border': 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
      },
      backgroundSize: {
        'divider': '120% 2px',
      },
      transitionTimingFunction: {
        'menu-icon': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
      },
      animation: {
        'pagination': 'pagination 3s linear',
      }
    },
    data: {
      main: 'section~="home"',
    },
    screens: {
      narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
      wide: { raw: '(min-aspect-ratio: 3 / 2)' },
      'taller-than-854': { raw: '(min-height: 854px)' },
    },
  },
  plugins: [],
}

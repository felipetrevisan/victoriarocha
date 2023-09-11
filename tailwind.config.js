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
      }
    },
    data: {
      main: 'section~="home"',
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

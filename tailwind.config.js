/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app': 'url("/assets/bg.jpg")',
        'divider': 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
      },
      backgroundSize: {
        'divider': '120% 2px',
      },
      transitionTimingFunction: {
        'menu-icon': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
      }
    },
    data: {
      main: 'section~="home"',
    },
  },
  plugins: [],
}

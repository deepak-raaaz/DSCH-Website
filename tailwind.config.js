/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          "50": "#FFEFE9",
          "100": "#FFCEBC",
          "200": "#FFCEBC",
          "300": "#FFB69B",
          "400": "#FF946E",
          "500-main": "#FF6026",
          "600": "#E85723",
          "700": "#B5441B",
          "800": "#8C3515",
          "900": "#6B2810"
        },
        base: {
          "text-box": "#F1F5F9"
        }
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll2': 'infinite-scroll 25s linear infinite reverse',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll2': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ]
}


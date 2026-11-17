/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#062017',
          800: '#0a2e21',
          DEFAULT: '#0b3828',
          light: '#134e38',
        },
        limeAccent: {
          DEFAULT: '#cbe875',
          hover: '#b8d960',
          light: '#e4f5a3',
        },
        cream: {
          50: '#fcfdfa',
          100: '#f6f8f0',
          200: '#edf2e1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

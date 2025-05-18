/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f0',
          100: '#f2ece1',
          200: '#e5d9c3',
          300: '#d8c6a5',
          400: '#c9ae81',
          500: '#ba965c',
          600: '#a47e48',
          700: '#86683b',
          800: '#6b5230',
          900: '#50402c',
          950: '#302517',
        },
        secondary: {
          50: '#f6f7f6',
          100: '#e3e7e2',
          200: '#c5cfc3',
          300: '#a1b19e',
          400: '#7d9178',
          500: '#5f755c',
          600: '#4a5e48',
          700: '#3c4c3a',
          800: '#313d30',
          900: '#2a3328',
          950: '#141a13',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc070',
          400: '#ff9a38',
          500: '#ff7e11',
          600: '#f05e06',
          700: '#c84707',
          800: '#9f380f',
          900: '#813010',
          950: '#461505',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://i0.wp.com/mass-foods.in/wp-content/uploads/2018/06/karupatti.jpg?fit=1000%2C1000&ssl=1')",
        'texture': "url('https://img.freepik.com/premium-photo/palm-trees-row-with-sky-background_663363-1118.jpg')",
      }
    },
  },
  plugins: [],
};

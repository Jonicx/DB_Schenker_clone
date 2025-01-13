/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 2px 6px rgba(0, 0, 0, 0.1)',
        'custom-medium': '0 4px 10px rgba(0, 0, 0, 0.15)',
        'custom-dark': '0 6px 15px rgba(0, 0, 0, 0.2)',
      },
      
    },
  },
  plugins: [],
};

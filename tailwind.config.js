/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './public/**/*.html', // Added public folder (if used)
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 2px 6px rgba(0, 0, 0, 0.1)',
        'custom-medium': '0 4px 10px rgba(0, 0, 0, 0.15)',
        'custom-dark': '0 6px 15px rgba(0, 0, 0, 0.2)',
      },
    },
    theme: {
      screens: {
        xsm: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },    
  },
  plugins: [],
  safelist: [
    'hidden', 
    'block', // Add dynamic or conditionally used classes here
  ],
};

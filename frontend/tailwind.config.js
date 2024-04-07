/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#023047',
        secondary: '#ffb703',
        danger: '#e3342f',
        success: '#38c172',
        warning: '#f6993f',
        info: '#6cb2eb',
        // light: '#f8f9fa',
        // dark: '#343a40',
      },
    },
  },
  plugins: [],
}


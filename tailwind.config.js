/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0A192F', // Custom blue color
        'menuBg': '#362F78',
        'bannerbg': '#6B7280',
        'projectbg': '#9CA3AF',// Menu background color
      },
    },
  },
  plugins: [],
};

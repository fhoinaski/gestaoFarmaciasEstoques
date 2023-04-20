/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem',
      },
      paddingBottom: {
        '100': '450px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#61DAFB",
        "dark-black": "#21222A",
        "light-black": "#282D35",
      },
    },
  },
  plugins: [],
};

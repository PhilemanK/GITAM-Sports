/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        customHeight: "13%",
      },
      colors: {
        customGreen: '#007169',
        customWhite: '#fef6ed',
        customHover: '#006071'
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        logoFont: ["Playwrite BE VLG", "cursive"],
      },
    },
  },
  plugins: [],
}

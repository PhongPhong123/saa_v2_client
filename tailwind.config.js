/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        opa: "rgba(255, 255, 255, 0.4)",
        "blur-gray": "#727272",
      },
      flex: {
        "2": "2 2 0%",
      }
    },
  },
  plugins: [],
}

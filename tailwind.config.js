/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        blackLogin: "#181f29",
        blueLogin: "#1C65F2",
        grayInput: "#323A4A",
        appColor: "#7100df",
        hoverAppColor: "#9264ff",
        activeAppColor: "#6645b2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

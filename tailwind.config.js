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
<<<<<<< HEAD
      colors: {
        blackLogin: "#181f29",
        blueLogin: "#1C65F2",
        grayInput: "#323A4A",
        appColor: "#7100df",
        hoverAppColor: "#9264ff",
        activeAppColor: "#6645b2",
      },
=======
      colors:{
        blackLogin: '#111828',
        blueLogin: '#1C65F2',
        grayInput: '#323A4A',
        blackRecovery: '#1E2A36',
        blueRecoveryPassword: '#1D65EE'
      }
>>>>>>> main
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};

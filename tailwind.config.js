/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        blackLogin: '#111828',
        blueLogin: '#1C65F2',
        grayInput: '#323A4A',
        blackRecovery: '#1E2A36',
        blueRecoveryPassword: '#1D65EE'
      }
    },
    
  },
  plugins: [require("flowbite/plugin")],
};

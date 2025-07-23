/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-h1": "clamp(1.75rem, 3vw, 3.5rem)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        blink1: "blink 4s infinite 0s", // Submit blinks first
        blink2: "blink 4s infinite 1s", // Match blinks after 1s
        blink3: "blink 4s infinite 2s",
      },
      keyframes: {
        blink: {
          "0%, 100%": { color: "rgb(31 41 55)" }, // gray-800
          "10%": { color: "rgb(59 130 246)" }, // blue-500
        },
      },
      colors: {
        "primary-black": "#2C2C2C",
        "secondary-black": "#515151",
        "grey-text": "#5B647A",
        "grey-disabled-text": "#7D889F",
        "red-error-text": "#FF0000",
        "divider-color": "#EBEBEB",
        "yellow-warning-1": "#FFA500",
        "yellow-warning-2": "#FFF6E5",
        "green-1": "#2ECD6F",
        "green-2": "#EAFAF1",
        "grey-hover": "#F4F6F9",
        "unread-color": "#EDF3FF",
        "grey-disabled": "#E2E7F1",

        "primary-color": {
          100: "#F2F2FF",
          200: "#D5D4FF",
          300: "#AEACFF",
          400: "#615EF0",
        },

        "secondary-color": {
          100: "#EDFFE6",
          200: "#D0FFBE",
          300: "#94C382",
          400: "#71A05F",
        },

        "red-error": {
          100: "#FFF0F0",
          200: "#FFD5D5",
          300: "#FDA29B",
          400: "#FF6E6E",
          500: "#FF0000",
        },
      },
    },
  },
  plugins: [],
};

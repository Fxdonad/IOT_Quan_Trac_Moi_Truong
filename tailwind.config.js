/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0b0a0f",
        background: "#f8f8fc",
        primary: "#5741c3",
        secondary: "#9f90ea",
        accent: "#6b50f2",
      },
    },
  },
  plugins: [],
};

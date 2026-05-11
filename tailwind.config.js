/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5e9",
        secondary: "#64748b",
        appbg: "#020617",
        apptext: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        rajdhani: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00f5ff",
        neon2: "#7b2fff",
        neon3: "#ff2d78",
        appbg: "#020b18",
        apptext: "#c9e8f0",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(0,245,255,0.35)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floatY: "floatY 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


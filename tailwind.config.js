/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00f0ff",
        "accent-light": "#67f7ff",
        "accent-dark": "#00b8c9",
        secondary: "#10b981",
        "secondary-light": "#34d399",
        highlight: "#7c3aed",
        "highlight-light": "#a78bfa",
        appbg: "#020a13",
        "appbg-light": "#0a1628",
        apptext: "#e0f2fe",
        "card-bg": "rgba(0,240,255,0.02)",
        "card-border": "rgba(0,240,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in-left": "fadeInLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in-right": "fadeInRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-x": "gradientX 6s ease infinite",
        "border-glow": "borderGlow 3s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0,240,255,0.1)" },
          "50%": { borderColor: "rgba(0,240,255,0.3)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #00f0ff 0%, #10b981 50%, #7c3aed 100%)",
        "accent-gradient-h": "linear-gradient(90deg, #00f0ff 0%, #10b981 50%, #7c3aed 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(16,185,129,0.03) 50%, rgba(124,58,237,0.05) 100%)",
      },
    },
  },
  plugins: [],
};

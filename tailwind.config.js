
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // same palette as the old CSS file, just promoted to tokens
        ink: "#333446", // row-firstcolor
        ink2: "#2F2F3A", // row-secondcolor
        card: "#4B4B5D", // selectionbox
        brand: "#FFC436", // yellowbar / hover accent
      },
      fontFamily: {
        inknut: ["var(--font-inknut)", "serif"],
        inder: ["var(--font-inder)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
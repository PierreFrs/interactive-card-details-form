/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: ["text-xs", "text-red-700", "focus:border-primaryLinearGradient"],
  theme: {
    colors: {
      primaryLinearGradient:
        "linear-gradient(to top, rgba(222,189,255,1), rgba(96,5,148,1))",
      primaryRed: "hsl(0, 100%, 66%)",
      neutralWhite: "hsl(0, 0%, 100%)",
      neutralLightGrayishViolet: "hsl(270, 3%, 87%)",
      neutralDarkGrayishViolet: "hsl(279, 6%, 55%)",
      neutralVeryDarkViolet: "hsl(278, 68%, 11%)",
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

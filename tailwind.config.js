const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkspace: "var(--color-darkspace)",
        paleblue: "var(--color-paleblue)",
        gray: "var(--color-gray)",
      },
      fontFamily: {
        bellfair: ["var(--font-bellfair)", ...fontFamily.sans],
        barlowcon: ["var(--font-barlow-condensed)", ...fontFamily.sans],
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

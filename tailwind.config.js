/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD55A",
        "base-50": "#4E4E4E ",
        "base-100": "#222222",
        light: "#F6F5F4",
        gray: "#00000014",
        gold: "#ffd55a",
      },
      fontFamily: {
        inter: ["var(--inter)"],
      },
    },
  },
  plugins: [],
};

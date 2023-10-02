/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#f1f8fe",
          100: "#e2f0fc",
          200: "#bedff9",
          300: "#84c6f5",
          400: "#42a9ee",
          500: "#1a8edd",
          600: "#0c6cb6",
          700: "#0b5999",
          800: "#0e4c7e",
          900: "#114169",
          950: "#0b2846",
        },
        "curious-blue": {
          50: "#f0fafc",
          100: "#e3f6fa",
          200: "#bbe7f2",
          300: "#94d8eb",
          400: "#4fb6db",
          500: "#1090cb",
          600: "#0d7cb8",
          700: "#095f99",
          800: "#06467a",
          900: "#04305c",
          950: "#011a3b",
        },
        "fuscous-gray": {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#d4d4d4",
          300: "#bababa",
          400: "#878787",
          500: "#545454",
          600: "#4d4545",
          700: "#403030",
          800: "#331f1f",
          900: "#261111",
          950: "#1a0707",
        },
        astronaut: {
          50: "#ebf4f7",
          100: "#daebf2",
          200: "#a7cadb",
          300: "#79aac7",
          400: "#336e9e",
          500: "#043873",
          600: "#033169",
          700: "#022457",
          800: "#011a45",
          900: "#011133",
          950: "#000a21",
        },
        "cornflower-blue": {
          50: "#f7fdff",
          100: "#edfaff",
          200: "#d4f0ff",
          300: "#b8e2fc",
          400: "#83c4fc",
          500: "#4f9cf9",
          600: "#4186e0",
          700: "#2d65ba",
          800: "#1d4996",
          900: "#103070",
          950: "#061947",
        },
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideDownAndFade:
          "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideRightAndFade:
          "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

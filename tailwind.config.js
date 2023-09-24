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
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

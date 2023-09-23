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
        primary: {
          500: "#0b2f4a",
        },
        secondary: {
          500: "#005162",
        },
        tertiary: {
          500: "#383bed",
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

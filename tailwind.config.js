module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        blue: {
          500: "#649DF9",
          600: "#0061FF",
        },
        gray: {
          600: "#646D7B",
          900: "#0B0B0D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

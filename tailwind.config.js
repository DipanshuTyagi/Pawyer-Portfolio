/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "btn-color": "#FF5E5B",
    },
    fontSize: {
      logo: "2.1875rem",
    },
    extend: {
      lineHeight: {
        "logo-line-hight": "3.28125rem",
      },
    },
  },
  plugins: [],
};

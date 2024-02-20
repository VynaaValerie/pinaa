/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    screens: {
      '2xs': '360px',
      // => @media (min-width: 360px) { ... }

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '520px',
      // => @media (min-width: 520px) { ... }

      '2sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      '2md': '1000px',
      // => @media (min-width: 840px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '1/2xl': '1410px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        custom: ["Rubik"],
      },
    },
  },
  plugins: [],
};

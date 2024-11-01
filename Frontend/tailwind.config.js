/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        wave: 'wave 3s ease-in-out infinite',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  plugins: [],
}}


// const defaultTheme = require("tailwindcss/defaultTheme");

// const colors = require("tailwindcss/colors");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     // rest of the code
//     extend: {
//       animation: {
//         scroll:
//           "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//       },
//       keyframes: {
//         scroll: {
//           to: {
//             transform: "translate(calc(-50% - 0.5rem))",
//           },
//         },
//       },
//     },
//   },
//   plugins: [addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }

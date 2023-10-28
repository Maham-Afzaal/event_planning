// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '360px',    // Custom XS breakpoint
        'sm': '600px',    // Custom SM breakpoint
        'md': '768px',    // Custom MD breakpoint
        'lg': '1024px',   // Custom LG breakpoint
        'xl': '1200px',   // Custom XL breakpoint
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

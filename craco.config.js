module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./src/assets/styles/tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
};

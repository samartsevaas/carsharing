const path = require("path");
module.exports = {
  publicPath: "/carsharing/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/abstracts/index.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "src/components/shared"),
        "@pages": path.resolve(__dirname, "src/components/pages"),
        "@modules": path.resolve(__dirname, "src/components/modules"),
      },
    },
  },
};

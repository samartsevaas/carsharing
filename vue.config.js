const path = require("path");
const isDev = process.env.NODE_ENV == "development";
module.exports = {
  publicPath: isDev ? "/" : "/carsharing/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/abstracts/index.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.avif$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@elements": path.resolve(__dirname, "src/components/elements"),
        "@pages": path.resolve(__dirname, "src/components/pages"),
        "@sections": path.resolve(__dirname, "src/components/sections"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@views": path.resolve(__dirname, "src/views"),
      },
    },
  },
};

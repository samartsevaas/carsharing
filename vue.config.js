const path = require("path");
const isDev = process.env.NODE_ENV == 'development';
module.exports = {
  publicPath: isDev ? '/' : "/carsharing/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/abstracts/index.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
        rules: [
          {
            test: /\.avif$/,
            use: 'file-loader'
          }
        ]
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "src/components/shared"),
        "@pages": path.resolve(__dirname, "src/components/pages"),
        "@modules": path.resolve(__dirname, "src/components/modules"),
        "@constants": path.resolve(__dirname, "src/constants"),
      },
    },
  },
};

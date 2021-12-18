// style.scssをグローバルで使用する

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // sass-loader@10.2.0
        // preventDataだとエラー吐く
        additionalData: `
          @import "@/assets/scss/style.scss";
        `
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
    }
  }
};
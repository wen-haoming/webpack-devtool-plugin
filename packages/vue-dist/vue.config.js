module.exports = {
  outputDir: 'lib',
  assetsDir: '',
  publicPath: '',
  devServer: {
    port: 3001,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.devtool = false;
    } else {
      // 为开发环境修改配置...
    }
  },
  css: { loaderOptions: { less: { javascriptEnabled: true } } },
};

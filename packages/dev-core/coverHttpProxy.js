const coverHttpProxy = (options = {}) => {
  return {
    before(app, server, compiler) {},
    proxy: {
      context: '/',
      target: '/',
      compress: true,
      changeOrigin: true,
      router(req) {
        console.log(currentUrl);
        return currentUrl;
      },
    },
    ...options,
  };
};

module.exports = coverHttpProxy;

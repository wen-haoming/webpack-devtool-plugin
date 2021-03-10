const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const resolve = (src) => path.resolve(__dirname, src);

class DevToolsPlugin {
  constructor(options) {
    this.options = options
    this.options.proxyArr = this.options.proxyArr || []
  }
  apply(compiler) {
    let self = this;

    if(!compiler.options.devServer){
      compiler.options.devServer = {}
    }

    compiler.options.devServer.proxy = {
      context: "/",
      target: "/",
      compress: true,
      changeOrigin: true,
      router(req) {
        const cookieData = {};
        if (req.headers.cookie && req.headers.cookie.split) {
          req.headers.cookie &&
            req.headers.cookie.split("; ").forEach((dataStr) => {
              const [key, val] = dataStr.split("=");
              if (key === "_domain") {
                cookieData[key] = val;
              }
            });
        }
        return cookieData._domain;
      },
    }

    compiler.hooks.emit.tapAsync("FilePlugin", (compilation, callback) => {
      const rootPath = resolve('./lib');

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'HtmlWebpackPlugin',
          (data, cb) => {
            data.html += fs.readFileSync(
                path.resolve(__dirname, "./lib/index.html"),
                "utf-8"
            );
            data.html = data.html.replace(
                /\{\{_domains\}\}/g,
                JSON.stringify(self.options.proxyArr)
            );
            cb(null, data)
          }
      )

      const dirs = fs.readdirSync(rootPath);
      dirs.forEach((dir) => {
        let stat = fs.statSync(rootPath + `/${dir}`);
        if (stat.isDirectory()) {
          const tarDirs = fs.readdirSync(rootPath + `/${dir}`);
          for (const file of tarDirs) {
            let content = fs.readFileSync(
              rootPath + `/${dir}/${file}`,
              "utf-8"
            );
            compilation.assets[`${dir}/${file}`] = {
              source: function() {
                return content;
              },
              size: function() {
                return content.length;
              },
            };
          }
        }
      });

      callback();
    });
  }
}

module.exports = DevToolsPlugin;

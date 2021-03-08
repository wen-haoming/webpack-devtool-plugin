const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const resolve = (src) => path.resolve(__dirname, src);

class DevToolsPlugin {
  constructor(options) {
    this.options = options;
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

    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
      // Create a header string for the generated file:
      const rootPath = resolve('./lib');
      let htmlContent = compilation.assets["index.html"].source();

      compilation.assets["index.html"] = {
        source: function() {
          htmlContent += fs.readFileSync(
            path.resolve(__dirname, "./lib/index.html"),
            "utf-8"
          );
          htmlContent = htmlContent.replace(
            /\{\{_domains\}\}/g,
            JSON.stringify(self.options.proxyArr)
          );
          return htmlContent;
        },
        size: function() {
          return htmlContent.length;
        },
      };

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

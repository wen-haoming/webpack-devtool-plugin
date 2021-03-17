const path = require("path");
const fs = require("fs");
const resolve = (src) => path.resolve(__dirname, src);

class DevToolsPlugin {
  constructor(options) {
    this.options = options
    this.options.proxyArr = this.options.proxyArr || []
  }

  static getProxyConfig(options = {}){
    const {
      context = '/',
      target = '/',
      compress = true,
      changeOrigin = true,
      router = (req) => {
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
        }
     } = options

    return {
      context:context ,
      target:  target,
      compress: compress ,
      changeOrigin: changeOrigin,
      router: router ,
}
  }

  apply(compiler) {
    let self = this;

    // maybe useful
    compiler.options.devServer = {
      '/': DevToolsPlugin.getProxyConfig()
    }

    // Called after setting up initial set of internal plugins.
    compiler.hooks.afterPlugins.tap('afterPlugins', (compiler) => {

      compiler.hooks.emit.tap("writeFileAndCopyFile", (compilation) => {
        const rootPath = resolve('./lib');
        let htmlContent = compilation.assets["index.html"].source();

        // overwrite html
        compilation.assets["index.html"] = {
          source: function () {
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
          size: function () {
            return htmlContent.length;
          },
        };

        // copy file
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
                source: function () {
                  return content;
                },
                size: function () {
                  return content.length;
                },
              };
            }
          }
        });
      });
    })


  }
}

module.exports = DevToolsPlugin;

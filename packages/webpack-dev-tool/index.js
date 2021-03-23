const path = require("path");
const fs = require("fs");
const resolve = (src) => path.resolve(__dirname, src);

let urlData = [
  {
    name: "",
    value: "",
    isRewrite: false,
  },
];

let currentUrl = "http://localhost:80";

class DevToolsPlugin {
  constructor(options) {
    this.options = options;
    this.options.proxyArr = this.options.proxyArr || urlData;
    urlData = this.options.proxyArr;

    currentUrl = (this.options.proxyArr || [{ value: currentUrl }])[0].value;
  }

  static devServerConfig(options = {}) {
    return {
      before(app, server, compiler) {
        app.get("/changeUrlData", (req, res) => {});

        app.get("/getCurrentUrl", (req, res) => {
          console.log('getCurrentUrl')
          res.send({ currentUrl });
        });

        app.get("/changeCurrentUrl", (req, res) => {
          console.log('changeCurrentUrl',req.query.currentUrl)
          currentUrl = req.query.currentUrl;
          res.send({ currentUrl });
        });
      },
      proxy: {
        context: '/',
        target: '/',
        compress: true,
        changeOrigin: true,
        router(req) {
          console.log('router--》',req.url)
          for (let { name, value, isRewrite } of urlData) {
            // if(new){
            // }
          }
          console.log(currentUrl);
          return currentUrl;
        },
      },
      ...options,
    };
  }

  apply(compiler) {
    let self = this;

    // maybe useful
    compiler.options.devServer  = DevToolsPlugin.devServerConfig()

    // Called after setting up initial set of internal plugins.
    compiler.hooks.afterPlugins.tap("afterPlugins", (compiler) => {
      compiler.hooks.emit.tap("writeFileAndCopyFile", (compilation) => {
        const rootPath = resolve("./lib");
        let htmlContent = compilation.assets["index.html"].source();

        // overwrite html
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
      });
    });
  }
}

module.exports = DevToolsPlugin;

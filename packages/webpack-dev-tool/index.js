const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const resolve = (src) => path.resolve(__dirname, src);

// proxyUrl
class DevToolsPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    let self = this;
    compiler.options.devServer = {
      // port: 9000,
      proxy: {
        context: '/',
        target: "/",
        contentBase: resolve("./dist"),
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
          console.log(cookieData._domain);
          return cookieData._domain;
        },
      },
    };

    // compiler.hooks.compilation.tap("MyPlugin", (compilation) => {
    //   console.log("The compiler is starting a new compilation...");
    //   // Static Plugin interface |compilation |HOOK NAME | register listener
    //   HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
    //     "MyPlugin", // <-- Set a meaningful name here for stacktraces
    //     (data, cb) => {
    //       // Manipulate the content
    //       data.html += fs.readFileSync(
    //         path.resolve(__dirname, "./lib/index.html"),
    //         "utf-8"
    //       );
    //       data.html = data.html.replace(
    //         /\{\{_domains\}\}/g,
    //         JSON.stringify(this.options.proxyArr)
    //       );
    //       // Tell webpack to move on快乐；’

    //       cb(null, data);
    //     }
    //   );
    // });

    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
      // Create a header string for the generated file:
      const rootPath = path.resolve(__dirname, "./lib");
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
      for (const dir of dirs) {
        let stat;
        try {
          stat = fs.statSync(rootPath + `/${dir}`);
        } catch (err) {
          if (err) return;
        }
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
      }
      callback();
    });

    compiler.hooks.afterEmit.tapAsync(
      "afterEmitPlugin",
      (compilation, callback) => {
        console.log("--afterEmitPlugin--", Object.keys(compilation.assets));
        callback();
      }
    );
  }
}

module.exports = DevToolsPlugin;

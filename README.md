<h1 align="center">webpack-devtool-plugin  👋</h1>
<p>
  <a href="https://www.npmjs.com/package/webpack-devtool-plugin" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/webpack-devtool-plugin.svg">
  </a>
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
  <a href="https://github.com/wen-haoming/webpack-devtool-plugin#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/wen-haoming/webpack-devtool-plugin/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/wen-haoming/webpack-devtool-plugin/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/wen-haoming/webpack-devtool-plugin" />
  </a>
</p>

<div align="left">
  <a href="https://github.com/webpack/webpack">
    <img width="600" src="https://cdn.nlark.com/yuque/0/2021/gif/276215/1615218548593-4bc692d6-948a-4f12-a38d-cb6f52d938b5.gif">
  </a>
 </div>
<br>


> Help developers switch agents Online

### 🏠 [Homepage](https://github.com/wen-haoming/webpack-devtool-plugin)

## Prerequisites

- npm >=5.5.0
- node >=9.3.0

## Install

```sh
npm install webpack-devtool-plugin -D
```

## usage

## Use in webpack.config.js

```diff
+ const WebpackDevtoolPlugin = require('webpack-devtool-plugin');

module.exports = {
+ devServer:WebpackDevtoolPlugin.devServerConfig(),
  plugins: [
+ new WebpackDevtoolPlugin({
+     proxyArr: [
+       { value: "http://a.com" },
+       { value: "http://b.com" },
+       { value: "http://c.com" },
+   ],
+ }),
  ],
}
```

## Use in vue

```js
// vue.config.js
 const WebpackDevtoolPlugin = require("webpack-devtool-plugin")

module.exports = {
    devServer:WebpackDevtoolPlugin.,
    configureWebpack:{
        plugins: [
            new WebpackDevtoolPlugin({
                proxyArr:[{
                    value:'http://localhost:3001'
                }]
            })
        ]},
}

```


# WebpackDevtoolPlugin  options
| **Name** | Type | value |
| :---: | :---: | :---: |
| proxyArr | _Array<{value:string}>_ | [{value:'http://a.com'}] |



## Author

👤 **wenhaoming <435203093@qq.com>**

* Website: http://whm.zone
* Github: [@wen-haoming](https://github.com/wen-haoming)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [wenhaoming <435203093@qq.com>](https://github.com/wen-haoming).<br />
This project is [MIT](https://github.com/wen-haoming/webpack-devtool-plugin/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

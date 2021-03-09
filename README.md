
<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://cdn.nlark.com/yuque/0/2021/svg/276215/1615218808621-a8286af2-4916-43e9-bbc5-5d3c42024544.svg">
  </a>
<br>
<br>

[![npm][npm]][npm-url]
[![node][node]][node-url]
</div>

# webpack-devtool-plugin

Help developers switch agents Online


<div align="left">
  <a href="https://github.com/webpack/webpack">
    <img width="500" src="https://cdn.nlark.com/yuque/0/2021/gif/276215/1615218548593-4bc692d6-948a-4f12-a38d-cb6f52d938b5.gif">
  </a>
<br>

# install
```bash
npm install webpack-devtool-plugin -D
```

# usage
`webpack.config.js`

```diff

 plugins: [
+  new DevToolsPlugin({
+     proxyArr: [
+       { value: "http://a.com" },
+       { value: "http://b.com" },
+       { value: "http://c.com" },
+   ],
+ }),
  ],
```
# options
| **Name** | Type | value |
| :---: | :---: | :---: |
| proxyArr | _Array<{value:string}>_ | [{value:'http://a.com'}] |




[npm]: https://img.shields.io/npm/v/webpack.svg
[npm-url]: https://npmjs.com/package/webpack
[node]: https://img.shields.io/node/v/webpack.svg
[node-url]: https://nodejs.org

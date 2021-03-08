
![webpack](https://cdn.nlark.com/yuque/0/2021/svg/276215/1615218808621-a8286af2-4916-43e9-bbc5-5d3c42024544.svg)
# webpack-devtool-plugin

Help developers switch agents Online


![Mar-08-2021 23-45-31.gif](https://cdn.nlark.com/yuque/0/2021/gif/276215/1615218548593-4bc692d6-948a-4f12-a38d-cb6f52d938b5.gif#align=left&display=inline&height=429&margin=%5Bobject%20Object%5D&name=Mar-08-2021%2023-45-31.gif&originHeight=902&originWidth=1324&size=3861235&status=done&style=none&width=629)


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




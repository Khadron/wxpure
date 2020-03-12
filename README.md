# wxpure

一款小而优雅的微信小程序原生开发框架，基于腾讯imweb团队[generator-imweb-wxapp](https://github.com/imweb/generator-imweb-wxapp)脚手架构建

- 支持全局数据状态管理（Westore）
- 支持request interceptor （重载wx.request方法）
- 支持生成二维码
- 封装常用组件
- postcss（变量、mixin 等）
- background-image 转成 inline base64
- font 字体转成 inline base64
- 图片及 svg 压缩，命令为 `gulp img`（图片压缩的 npm 需要配置代理或使用 staffwifi）
- 代码规范（eslint、stylelint、commitlint）
- 代码格式化 prettier

### 1. 为何选择原生框架

1. 小程序工程化在不断的完善，目前已经支持使用 npm 模块、ES6 转 ES5 等功能

2. 小程序的特性更新迭代速度较快，其他第三方框架可能会有迭代滞后到问题

3. 大道至简，“pure”至上


### 2. 项目初始化

```
# 初始化依赖
npm install

# 运行
npm run dev /* 启动 gulp构建工具 */
```

最后，使用微信开发者工具新建项目，选择项目路径即可。

### 3. VS Code 插件

- [minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode) 用于支持 wxml 代码高亮与代码片段
- [vscode weapp api](https://marketplace.visualstudio.com/items?itemName=coderfee.vscode-weapp-api) 用于支持 wx api 代码片段
- [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) 用于隐藏 wxss 文件，只暴露 CSS 文件

### 4. 目录结构
```
src/
|__
   |api/                  -- 存放所有请求
   |assets/               -- 资源
   |__
      |images/            
   |components/           -- 组件
   |lib/                  -- 第三方库
   |pages/                -- 存放所有模块的微信小程序页面
   |store/                -- 全局数据状态管理
   |__
      |modules/           -- 子模块数据状态
      |index.js
   |template/             -- 微信小程序模板
   |utils/                -- 工具方法
   |app.css
   |app.js
   |app.json
   |config.js             -- 项目相关配置（eg. 接口的请求地址）
   |gulpfile.js           -- gulp构建相关配置
   |postcss.config.js     -- postcss相关配置
   |project.config.json   

````
  
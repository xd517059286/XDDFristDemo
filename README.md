#### Demo

> #####A Vue.js project

##### 1.部署步骤

``` bash
1. 安装依赖
npm install

2. 启动项目
npm run dev { project }

3. 打包项目
npm run build { project }

```
##### 2.目录结构描述

``` bash
├── build                                   // webpack配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js                // 开发环境
│   └── webpack.prod.conf.js               // 打包配置
├── config                                 // 配置
│   ├── build.js                           // 单独项目打包配置 npm run build project
│   ├── dev.env.js
│   ├── dev.js                             // 单独项目启动配置 npm run dev project
│   ├── index.js                           //  开发环境与生产环境配置
│   ├── project.env.js
│   └── project.js                         // 打包或启动项目文件名（自动获取）无需设置
├── dist                                   // 打包文件
├── node_modules
├── src
│   ├── assets                             // 多项目全局静态文件
│   ├── components                         // 多项目全局组件
│   ├── project                            // 多项目文件
│       ├── project2                       // 项目2
│          ├── api                         // api集合
│          ├── components                  // 项目组件
│          ├── mock                        // mock
│          └── utils                       // 设置文件
│             └── require.js               // 接口配置文件
│          ├── App.vue                     // App.vue
│          ├── index.html                  // index.html
│          └── main.js                     // 项目入口文件
│       ├── common.js                      // 多项目公共js
│       └── commonCss.js                   // 多项目公共css引入
├── static                                 // web静态资源加载
├── .babelrc
├── .editorconfig
├── .gitignore
├── .postcssrc.js
├── package.json
├── package-lock.json
├── postcss.config.js                      // postcss 配置文件
├── project.config.js                      // 多项目结构配置（构建多项目时必须配置）
├── tailwind.config.js                     // tailwind css 配置文件
└── README.md
```
##### V1.0.1 版本内容更新
1. 新增[tailwindcss](https://tailwindcss.com/docs/installation)
2. 结构优化


> 记录，成为更好的自己，为此而奋斗

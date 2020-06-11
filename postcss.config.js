// postcss 用法详情 todo https://github.com/postcss/postcss/blob/master/README-cn.md
const projectConfig = require('./project.config')
var plugins = [
  require('postcss-import'),
  require('tailwindcss'),// 增加对嵌套声明的支持
  require('autoprefixer'),//添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据。
  require('postcss-nested'),
  require('precss'),//包含类似于Sass的功能的插件，例如变量，嵌套和混合。
  require('postcss-safe-parser'),//针对 PostCSS的容错CSS解析器，可以找到&修复语法错误

];
if(projectConfig.pxtorem){
  // postcss-pxtorem用法详情 todo https://github.com/cuth/postcss-pxtorem/
  plugins.push(
    require('postcss-pxtorem')({//把px转换成rem
        rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
        propList: ['*','!border*'],//使用通配符*启用所有属性
        mediaQuery:true,//（布尔值）允许在媒体查询中转换px。
        minPixelValue:0,// （数字）设置要替换的最小像素值。
    })
  )
}
module.exports = {
  plugins: plugins
}

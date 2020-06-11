// 修改文件后需要重新启动项目
const projectName = require('./config/project')
// prefix 接口前缀
// isMock 是否启用mock
// proxy 代理设置
// pxtorem 是否启用将px转为rem
// productionGzip 打包时是否打包压缩包 tar.gz
// FileManagerName 打包时压缩包名称，默认为项目名称
const config = {
  //项目2
  "project2":{
    localPath:'./src/projects/project2/',
    port:8008,
    prefix:'',
    isMock:false,
    productionGzip:true,// 打包时是否打包压缩包 tar.gz
    FileManagerName:'',//打包时压缩包名称，默认为项目名称
    proxy:{
      "/admin": {
        // 这里是公共部分，在调用接口时后面接不相同的部分，/admin就相当于http://192.168.1.202:8098/admin这一段
        target: "http://192.168.1.202:8087", // 这里写的是访问接口的域名和端口号
        changeOrigin: true, // 必须加上这个才能跨域请求
        pathRewrite: {
          // 重命名
          "^/admin": ""
        }
      },
    },
    pxtorem:false, // todo 是否启用将px转为rem(启用后如果想继续用‘px’则改为用‘PX’)
  },
};

const configObj = config[projectName.name]
module.exports = configObj

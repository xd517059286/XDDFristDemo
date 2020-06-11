// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import projectConfig from '../../../project.config'
import  'normalize.css'
import  '../../commonCss'
import common from '../../common'
// 是否启用mock
if(projectConfig.isMock){
  require('./mock');
}

Vue.config.productionTip = false
Object.keys(common).forEach((v,i)=>{
  Vue.prototype[v] = common[v]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ElementUI
import ElementUI from 'element-ui'
// 引入axios实例
import http from 'network/http'
// 引入moment日期格式化实例
import dayJs from 'dayjs'
// 引入初始化样式css
import 'assets/css/normalize.css'
import 'assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 使用插件
Vue.use(ElementUI)
// 挂载模块到Vue原型上
Vue.prototype.$http = http
Vue.prototype.$dayjs = dayJs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'

import { $log } from '@adber/adber-ui/src/utils/index.js'

// 导入组件库
import AdberUI from './../packages'

// 正式
// import AdberUI from '@adber/adber-ui/lib/adber-ui.common'
// import AdberUI from '@adber/adber-ui/lib/adber-ui.umd'
// import AdberUI from '@adber/adber-ui'

// 默认 elemen-ui 样式
// import 'element-ui/lib/theme-chalk/index.css'
// import '@adber/adber-ui/style/element-variables.scss' // 公用声明
import '@/assets/css/element-variables.scss'

// import '@adber/adber-ui/src/css/reset.scss'
import '@adber/adber-ui/style/index.scss'

import ElementUI from 'element-ui/lib/element-ui.common.js'
// import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  // locale: i18n.locale,
  i18n: (key, value) => i18n.t(key, value),
  size: 'medium'
})
// 注册组件库
Vue.use(AdberUI, {
  // 方式1
  // locale: i18n.locale,
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false
Vue.config.lang = 'en'
Vue.prototype.$log = $log
window.vue = Vue
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

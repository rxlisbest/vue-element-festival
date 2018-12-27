import Vue from 'vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')

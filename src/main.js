import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import Router from "vue-router";

Vue.use(ElementUI)
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

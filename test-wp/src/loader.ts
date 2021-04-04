import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

const root = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

document.body.appendChild(root.$el) // for webpack
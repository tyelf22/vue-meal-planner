import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

//Setting up default vue's http modules for api calls
Vue.prototype.$http = axios
//Load the token from the localStorage
const token  = localStorage.getItem("token")

//If there is a token then default axios authorization headers
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

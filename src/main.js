import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Login from './components/Login.vue'

import axios from 'axios'

import './assets/css/global.css'
Vue.config.productionTip = false
axios.defaults.baseURL = "http://192.168.43.152:8080/"
axios.defaults.headers.post['Content-Type'] = "application/json"
Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant/vant'
import './style/base/index.css'
import './style/icoo/iconfont.css'
import 'amfe-flexible'
import axios from 'axios'
import NewsHmheads from './components/New-Heads.vue'
import NewTitle from './components/New-Title.vue'
import NewNav from './components/New-Nav.vue'
import moment from 'moment'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.config.productionTip = false
Vue.component('NewsHeads', NewsHmheads)
Vue.component('NewTitle', NewTitle)
Vue.component('NewNav', NewNav)
Vue.filter('time', function (value, format = 'YYYY-MM-DD') {
  return moment().format(format)
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

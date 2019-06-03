import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import SmartTable from 'vuejs-smart-table'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Vue.config.productionTip = false
Vue.use(VueMoment)
Vue.use(SmartTable)
Vue.use(Chartkick.use(Chart))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

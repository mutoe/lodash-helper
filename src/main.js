import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

import './registerServiceWorker'
import 'normalize.css'
import './stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

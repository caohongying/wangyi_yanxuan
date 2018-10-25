import router from './router'
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import store from './store'
import './mock/mock'
import VueLazyload from 'vue-lazyload'
import loading from './common/loading.jpg'
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{
  loading
});
Vue.filter('format-date', function (value, format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format);
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

import './log/console'
//plugin
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate'                  // 表格檢測
import zhTW from 'vee-validate/dist/locale/zh_TW.js';   // 表格檢測繁中包
import VuePhotoZoomPro from 'vue-photo-zoom-pro'        // 放大鏡

// myfile
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './style/front_end.scss';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);                                   // 表格檢測
VeeValidate.Validator.localize('zhTW', zhTW);           // 表格檢測繁中包
Vue.use(VuePhotoZoomPro);
Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  router,
	store,
  render: h => h(App),
}).$mount('#app')

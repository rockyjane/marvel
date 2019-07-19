import './log/console'
//plugin
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate'                  // 表格檢測
import zhTW from 'vee-validate/dist/locale/zh_TW.js';   // 表格檢測繁中包
import VuePhotoZoomPro from 'vue-photo-zoom-pro'        // 放大鏡
import 'font-awesome/css/font-awesome.css'              // 免費 ICON

// myfile
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './style/front_end.scss';

// FB SignIn
import './api/fbInit'
// Google SignIn
import VueGAPI from "vue-gapi";

const VUE_APP_GOOGLE_CLIENT_ID = process.env.VUE_APP_GOOGLE_CLIENT_ID
const apiConfig = {
    clientId: `${VUE_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets"
}

Vue.use(VeeValidate);                                   // 表格檢測
VeeValidate.Validator.localize('zhTW', zhTW);           // 表格檢測繁中包
Vue.use(BootstrapVue);
Vue.use(VueGAPI, apiConfig);
Vue.use(VuePhotoZoomPro);
Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

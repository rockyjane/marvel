import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '../i18n/index.js';							// 語言包 - i18n
import loading from './modules/loading';						// 載入動畫 - api
import marvel from './modules/marvel';
import googleStatus from './modules/googleStatus';				// 登入 - Google
import fbStatus from './modules/fbStatus';						// 登入 - Facebook
import googleGeolocation from './modules/googleGeolocation';	// 定位 - Google
import popupModal from './modules/popupModal';					// 共用 - bootstrap 4 modal

Vue.use(Vuex);

// 防止外部code影響內部
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		loading,
		marvel,
		googleStatus,
		googleGeolocation,
		fbStatus,
		popupModal,
	},
	state: {
		lang: i18n.locale
	},
	mutations: {
		changeLocale(state, lang) {
			state.lang = lang;
		}
	},
	actions: {
		
	},
	strict: debug,
});
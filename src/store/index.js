import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import marvel from './modules/marvel';
import googleStatus from './modules/googleStatus';
import fbStatus from './modules/fbStatus';
import googleGeolocation from './modules/googleGeolocation';
import popupModal from './modules/popupModal';

Vue.use(Vuex);

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
		
	},
	mutations: {
		
	},
	actions: {
		
	},
	strict: debug,
});
import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import marvel from './modules/marvel';
import googleStatus from './modules/googleStatus';
import fbStatus from './modules/fbStatus';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		loading,
		marvel,
		googleStatus,
		fbStatus,
	},
	state: {
		
	},
	mutations: {
		
	},
	actions: {
		
	},
	strict: debug,
});
import { setStorage } from '../partials/locker';
import { getApiToken } from '@/store/partials/marvel'
import marvelApi from '@/api/marvel';

let api_token = getApiToken();

const state = {
    marvel: {},
    marvel_len: {},
    marvel_card: {},
    marvel_strip: {},
    api_token,
};

const actions = {
    getMarvelCoupleApi_ByVueX({
        commit
    }) {
        marvelApi.getMarvelCouple((data) => {
            commit('setMarvel', data);
        });
    },
};

const mutations = {
    setMarvel(state, marvel) {
        state.marvel = marvel;  // 舊寫法 Vue.set(state, 'marvel', marvel);
    },
    setMarvelLen(state, marvel_len) {
        state.marvel_len = marvel_len;
    },
    setMarvelCardList(state, marvel_card) {
        state.marvel_card = marvel_card;
    },
    setMarvelStripBox(state, marvel_strip) {
        state.marvel_strip = marvel_strip;
    },
    setApiToken(state, api_token) {
        state.api_token = api_token;
        setStorage('api_token', state.api_token);
    },
};

const getters = {
    isLogin(state) {
        return state.api_token ? true : false;
    },
    apiToken(state) {
        return state.api_token;
    },
    marvel(state) {
        return state.marvel;
    },
    marvelLen(state) {
        return state.marvel_len;
    },
    marvelCard(state) {
        return state.marvel_card;
    },
    marvelStrip(state) {
        return state.marvel_strip;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
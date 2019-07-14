const state = {
    fbState: false,
    fbInfo: {
        email: '',
        id: '',
        name: '',
    },
    fbToken: '',
};

const actions = {};

const mutations = {
    setFbState(state, fbState) {
        state.fbState = fbState;
    },
    setFbInfo(state, fbInfo) {
        state.fbInfo = fbInfo;
    },
    setFacebookAccessToken(state, facebookAccessToken) {
        state.fbToken = facebookAccessToken;
    },
};

const getters = {
    fbState(state) {
        return state.fbState
    },
    fbInfo(state) {
        return state.fbInfo
    },
    fbToken(state) {
        return state.fbToken
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
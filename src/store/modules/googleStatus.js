const state = {
    googleState: false,
    googleInfo: {
        email: '',
        access_token: '',
        cover: '',
        all_name: '',
    },
    googleAuth: {},
};

const actions = {
    
};

const mutations = {
    setGoogleState(state, googleState) {
        state.googleState = googleState
    },
    setGoogleEmail(state, googleEmail) {
        state.googleInfo.email = googleEmail;
    },
    setGoogleCover(state, googleCover) {
        state.googleInfo.cover = googleCover;
    },
    setGoogleAllName(state, googleAllName) {
        state.googleInfo.all_name = googleAllName;
    },
    setGoogleAccessToken(state, googleAccessToken) {
        state.googleInfo.access_token = googleAccessToken;
    },
    setGoogleAuth(state, googleAuth) {
        state.googleAuth = googleAuth
    }
};

const getters = {
    googleState(state) {
        return state.googleState
    },
    googleInfo(state) {
        return state.googleInfo
    },
    googleAuth(state) {
        return state.googleAuth
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
const state = {
    googleLocation: {
        lat: '',
        lng: '',
    },
};

const actions = {
    
};

const mutations = {
    setGoogleLat(state, googleLocation) {
        state.googleLocation.lat = googleLocation
    },
    setGoogleLng(state, googleLocation) {
        state.googleLocation.lng = googleLocation
    },
};

const getters = {
    googleLat(state) {
        return state.googleLocation.lat
    },
    googleLng(state) {
        return state.googleLocation.lng
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
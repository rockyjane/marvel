const state = {
    display: false,
};

const actions = {
    
};

const mutations = {
    setDisplay(state, display) {
        state.display = display;
    },
};

const getters = {
    display(state) {
        return state.display;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
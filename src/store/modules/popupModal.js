const state = {
    defaultShow: false,
    title: '',
    message: '',
    message2: '',
    message3: '',
    button1Text: '',
    button2Text: '',
    button1Click: null,
    button2Click: null,
    closeShow: true,
};

const actions = { //共用的function
    open({
        commit
    }, {
        title,
        message,
        message2,
        message3,
        button1Text = 'yes',
        button2Text = 'no',
        button1Click = () => {},
        button2Click = () => {},
        closeShow = true,
    }) {
        commit('setTitle', title);
        commit('setMessage', message);
        commit('setMessage2', message2);
        commit('setMessage3', message3);
        commit('setDefaultShow', true);
        commit('setButton1Text', button1Text);
        commit('setButton2Text', button2Text);
        commit('setButton1Click', button1Click);
        commit('setButton2Click', button2Click);
        commit('setCloseShow', closeShow);
    },
    close({
        commit
    }) {
        commit('setTitle', '');
        commit('setMessage', '');
        commit('setMessage2', '');
        commit('setMessage3', '');
        commit('setDefaultShow', false);
    }
};

const mutations = { //專門修改設定state的功能
    setDefaultShow(state, show) {
        state.defaultShow = show
    },
    setTitle(state, text) {
        state.title = text
    },
    setMessage(state, text) {
        state.message = text
    },
    setMessage2(state, text) {
        state.message2 = text
    },
    setMessage3(state, text) {
        state.message3 = text
    },
    setButton1Text(state, text) {
        state.button1Text = text
    },
    setButton2Text(state, text) {
        state.button2Text = text
    },
    setButton1Click(state, cb) {
        state.button1Click = cb
    },
    setButton2Click(state, cb) {
        state.button2Click = cb
    },
    setCloseShow(state, cb) {
        state.closeShow = cb
    },
};

const getters = { // 專門抓取資料(很像components的computed)
    defaultShow(state) {
        return state.defaultShow
    },
    title(state) {
        return state.title
    },
    message(state) {
        return state.message
    },
    message2(state) {
        return state.message2
    },
    message3(state) {
        return state.message3
    },
    button1Text(state) {
        return state.button1Text
    },
    button2Text(state) {
        return state.button2Text
    },
    button1Click(state) {
        return state.button1Click
    },
    button2Click(state) {
        return state.button2Click
    },
    closeShow(state) {
        return state.closeShow
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
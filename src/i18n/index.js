import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locale/en.js';
import zhTw from './locale/zhTw.js';
import spain from './locale/spain.js';
import none from './locale/none.js';

Vue.use(VueI18n);

localStorage.setItem('lang', 'none'); 
const i18n = new VueI18n({
    locale: localStorage.getItem('lang'), 
    fallbackLocale: 'none',
    messages: {
        en,
        zhTw,
        spain,
        none,
    }
});

export default i18n;

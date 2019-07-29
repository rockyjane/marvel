export default {
    data() {
        return {
            lang:[{
                    name: '預設(設計好的樣式)',
                    id: 'none',
                },{
                    name: 'EN',
                    id: 'en',
                }, {
                    name: '繁中',
                    id: 'zhTw',
                }, {
                    name: 'España',
                    id: 'spain',
                }
            ],
        };
    },
    computed: {
        currentLang() {
            return this.$store.state.lang;
        }
    },
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang
            this.$store.commit('changeLocale', this.$i18n.locale);
            localStorage.setItem('lang', this.$i18n.locale);
        },
    },
}
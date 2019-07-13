import {
    mapGetters,
    mapMutations,
} from 'vuex';
// 配合後端記住是否有無登入的 api 並展示客戶資訊
// import authApi from '@/api/auth';

export default {
    name: 'GoogleSignIn',
    computed: {
        ...mapGetters('googleStatus', {
            ggState: 'googleState',
            ggInfo: 'googleInfo',
        }),
    },
    methods: {
        ...mapMutations('googleStatus', [
            'setGoogleState',
            'setGoogleAccessToken',
            'setGoogleEmail',
            'setGoogleCover',
            'setGoogleAllName',
        ]),
        // 登入
        googleSignIn() {
            let vm = this,
                GoogleAuth = gapi.auth2.getAuthInstance()
            // GoogleState = GoogleAuth.isSignedIn.Ab // 使用它原生抓法會太慢顯現而導致無法換頁，直接用 VueX
            GoogleAuth.signIn().then((res) => {
                vm.setGoogleState(true)
                vm.setGoogleAccessToken(res.Zi.access_token)
                // authApi.googleLogin({
                //     access_token: this.ggInfo.access_token,
                // }, (data) => {
                //     cl(data)
                //     this.$router.push({ name: "home"})
                // }, (message, result) => {
                //     if (result == '40001' && vm.ggState) {
                //         if (vm.$router.app._route.name == 'registered') vm.googleGetInfo(GoogleAuth, res)
                //         vm.$router.push({
                //             name: 'registered'
                //         }, () => {
                //             vm.googleGetInfo(GoogleAuth, res)
                //         })
                //     } else {
                //         alert(message);
                //     }
                // })
                vm.googleGetInfo(GoogleAuth, res)
                return false
            });
        },
        // 登出
        googleSignOut() {
            let vm = this,
                GoogleAuth = gapi.auth2.getAuthInstance()
            // 登出 || 切換身份
            GoogleAuth.signOut().then(() => {
                cl("Google User logout.");
                vm.setGoogleState(false);
                vm.$router.push({ name: 'plugins.social' })
            });
            // 斷開一切授權與身份
            // GoogleAuth.disconnect().then(() => {
            //     cl("Google User disconnected.");
            //     vm.$router.push({
            //         name: 'plugins.social'
            //     }, () => {
            //         vm.setGoogleState(false)
            //     })
            // });
        },
        // 抓取使用者資料
        googleGetInfo(state, info) {
            let ca = info,
                cs = state.isSignedIn.Ab
            if (info) {
                let gg = ca.w3.U3.split('@');
                let info = {
                    登入狀態: cs,
                    登入者帳號: ca.w3.U3,
                    登入者圖片: ca.w3.Paa,
                    登入者全名: ca.w3.ig,
                    登入者名字: ca.w3.ofa,
                    登入者姓氏: ca.w3.wea,
                    取得認證時間: ca.Zi.first_issued_at,
                    認證保質時限: ca.Zi.expires_at,
                    "Google ID": ca.w3.Eea,
                    "Google ID Tokens": ca.Zi.id_token,
                    "所屬 G Suite 網域": gg[1] !== 'gmail.com' ? gg[1] : undefined
                };
                cl('Google User Info graphAPI', info);
                this.setGoogleEmail(ca.w3.U3);
                this.setGoogleCover(ca.w3.Paa);
                this.setGoogleAllName(ca.w3.ig);
            }
            return false
        },
    },
}
import {
    mapGetters,
    mapMutations,
} from 'vuex';

export default {
    name: 'FBSignIn',
    computed: {
        ...mapGetters('fbStatus', {
            fb: 'fbState',
            fbInfo: 'fbInfo',
            fbToken: 'fbToken'
        }),
        fbPicture() {
            return this.fbInfo.id ? `https://graph.facebook.com/${this.fbInfo.id}/picture?width=300` : `https://fakeimg.pl/300/`
        },
    },
    methods: {
        ...mapMutations('fbStatus', [
            'setFbState',
            'setFacebookAccessToken',
            'setFbInfo',
        ]),
        fbLogin() {
            let vm = this
            FB.login((response) => {
                vm.setFbState(true)
                vm.setFacebookAccessToken(response.authResponse.accessToken)
                cl('FB User signed ins.', response)
                vm.getFbProfile()
            }, {
                scope: 'email, public_profile',
                return_scopes: true
            })
        },
        fbLogOut() {
            let vm = this
            FB.logout((response) => {
                cl('FB User logout.', response)
                vm.setFbState(false)
                vm.$router.push({ name: 'plugins.social' })
            })
        },
        getFbProfile() {
            let vm = this
            FB.api('/me?fields=name,id,email', (response) => {
                cl('FB User Info graphAPI', response)
                vm.setFbInfo(response)
            })
            return false
        },
    },
}
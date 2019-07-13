<template>
    <div id="app">
        <page-header />
        <router-view></router-view>
        <page-footer />
        <loading />
    </div>
</template>

<script>
    import pageHeader from '@/components/common/Header';
    import pageFooter from '@/components/common/Footer';
    import Loading from '@/components/partials/Loading';
    import {
        mapMutations,
    } from 'vuex';

    export default {
        name: 'app',
        components: {
            pageHeader,
            pageFooter,
            Loading,
        },
        methods: {
			...mapMutations('googleStatus', [
				'setGoogleAccessToken',
			]),
		},
		mounted() {
            // 初始化 Google
			this.$getGapiClient().then(gapi => {
					// 身份資訊
				let GoogleAuth = gapi.auth2.getAuthInstance(),
					// 登入狀態
                    GoogleState = GoogleAuth.isSignedIn.Ab
				cl( 'gapi','\n', gapi,'\n', 'GoogleAuth','\n', GoogleAuth,'\n', 'GoogleState', GoogleState)
				// 是否已登入
				if (GoogleState) {
					// 給予後端資料
					let GoogleGT = gapi.auth2._gt();
					cl('GoogleState', GoogleState,'\n', 'GoogleGT', GoogleGT)
					this.setGoogleAccessToken(GoogleGT.access_token);
				}
			})
		},
    }
</script>
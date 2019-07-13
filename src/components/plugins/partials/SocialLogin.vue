<template>
    <div class="socialLogin fullHeight posr pt-5">
        <div class="row justify-content-center mb-2 other_login" v-if="!ggState">
            <div class="col-10 col-sm-4 mb-2 text-center">
                <a href="javascript:;" class="facebook_signIn signIn clearbox">
                    <div class="title">FB {{ title }}</div>
                </a>
            </div>
            <div class="col-10 col-sm-4 mb-2 text-center">
                <a href="javascript:;" class="google_signIn signIn clearbox"  @click="googleSignIn">
                    <div class="title">Google {{ title }}</div>
                </a>
            </div>
        </div>
        <div class="item posa clearbox" v-if="ggState">
            <div class="item_bgBox posa">
                <!-- <img class="mb-3" :src="ggInfo.cover"> -->
                <div class="item_bg mb-2" :style="`background-image:url(${ggInfo.cover});`"></div>
                <p>{{ ggInfo.all_name }}</p>
                <button class="btn clickEnter text-right" @click="googleSignOut">Google {{ title }}</button>
                <div class="emailUsed text-right">
                    您正在使用的信箱：<b>{{ggInfo.email}}</b>
                </div>
            </div>
            <h6 class="vr-l posa">
                離開或重整後資料將不保留，放心
                <span class="bar"></span>
            </h6>
        </div>
    </div>
</template>

<script>
    import GoogleSignIn from '@/mixins/GoogleSignIn'

    export default {
        name: 'SocialLogin',
        computed: {
            title() {
                return this.ggState ? '登出' : '登入'
            },
        },
        mixins: [
            GoogleSignIn,
        ],
    }
</script>
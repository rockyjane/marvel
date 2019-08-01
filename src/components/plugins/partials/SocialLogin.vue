<template>
    <div class="socialLogin fullHeight posr pt-5">
        <div class="row justify-content-center mb-2 other_login" v-if="!state">
            <div class="col-10 col-sm-4 mb-2 text-center">
                <a href="javascript:;" class="facebook_signIn signIn clearbox" @click="goingFB">
                    <div class="title">FB {{ title }}</div>
                </a>
            </div>
            <div class="col-10 col-sm-4 mb-2 text-center">
                <a href="javascript:;" class="google_signIn signIn clearbox" @click="googleSignIn">
                    <div class="title">Google {{ title }}</div>
                </a>
            </div>
        </div>
        <div class="item posa clearbox" v-if="state">
            <div class="item_bgBox posa">
                <!-- <img class="mb-3" :src="ggInfo.cover"> -->
                <div class="item_bg mb-2" :style="`background-image:url(${cover});`"></div>
                <p>{{ name }}</p>
                <button class="btn clickEnter text-right" @click="socialSignOut(stateName)">{{ stateName }} {{ title }}</button>
                <div class="emailUsed text-right">
                    您正在使用的信箱：<b>{{email}}</b>
                </div>
                <h6 class="vr-l posa">
                    離開或重整後資料將不保留，放心
                    <span class="bar"></span>
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
    import GoogleSignIn from '@/mixins/GoogleSignIn'
    import FBSignIn from '@/mixins/FBSignIn'

    export default {
        name: 'SocialLogin',
        computed: {
            title() {
                return this.state ? '登出' : '登入'
            },
            stateName() {
                let name;
                if (this.fb) name = 'Facebook'
                if (this.ggState) name = 'Google' 
                return name
            },
            state() {
                return (this.fb || this.ggState) ? true : false
            },
            cover() {
                if (this.stateName == 'Facebook') {
                    return this.fbPicture
                } else {
                    return this.ggInfo.cover
                }
            },
            name() {
                if (this.stateName == 'Facebook') {
                    return this.fbInfo.name
                } else {
                    return this.ggInfo.all_name
                }
            },
            email() {
                if (this.stateName == 'Facebook') {
                    return this.fbInfo.email
                } else {
                    return this.ggInfo.email
                }
            }
        },
        mixins: [
            GoogleSignIn,
            FBSignIn,
        ],
        methods: {
            socialSignOut(name) {
                if (this.stateName == 'Facebook') {
                    this.fbLogOut()
                } else {
                    this.googleSignOut()
                }
            },
            goingFB() {
                if (confirm('將導向能夠測試FB的https協定網站')) window.location.href = 'https://apiusejson.github.io/forjson/#/plugins/social'
            },
        },
    }
</script>
import GoogleSignIn from '@/mixins/GoogleSignIn'
import FBSignIn from '@/mixins/FBSignIn'

export default {
    mixins: [
        GoogleSignIn,
        FBSignIn,
    ],
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true,
        }
    },
    methods: {
        // 重整頁面
        reload() {
            // if (this.isLogin) { // 若是有登入，配合 vuex
            //     this.logout();
            //     this.$router.push({ name: 'home' });
            // }
            this.isRouterAlive = false;
            this.$nextTick(()=>{
                this.isRouterAlive = true;
                alert('親，妳閒置太久囉，已幫妳重新刷新頁面並登出')
                // 放入妳要重置資訊功能 start
                this.fbLogOut()
                this.googleSignOut()
                // 放入妳要重置資訊功能 end
            })
        },
    },
    created() {
        let vm = this;
        // 閒置過久後執行
        function idleLogout() {
            let t, time = 600000;
            window.onload = resetTimer;
            window.onmousemove = resetTimer;
            window.onmousedown = resetTimer; // catches touchscreen presses as well      
            window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
            window.onclick = resetTimer; // catches touchpad clicks as well
            window.onkeypress = resetTimer;
            window.addEventListener('scroll', resetTimer, true); // improved; see comments

            function resetTimer() {
                clearTimeout(t);
                t = setTimeout(vm.reload, time); // time is in milliseconds
            }
        }
        idleLogout()
    },
}
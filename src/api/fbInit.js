import store from '@/store/index.js';

// 初始化 FB
window.fbAsyncInit = () => {
    FB.init({
        appId      : process.env.VUE_APP_FB_APP_ID,
        cookie     : true,
        xfbml      : true,
        version    : process.env.VUE_APP_FB_APP_VERSION
    });
    FB.AppEvents.logPageView();
    cl('fbAsyncInit')

    // 取得 FB 登入狀態
    FB.getLoginStatus(res => {
        // 這裡可以得到 fb 回傳的結果
        if(res.status === 'connected') {
            // 給予後端資料
            cl('FBGT', res.authResponse)
            store.commit('fbStatus/setFacebookAccessToken', res.authResponse.accessToken);
        }
    })
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/zh-TW/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

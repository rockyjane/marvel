import callApi from './partials/api';

export default {
    //google登入
    googleLogin({
        access_token,
    }, cb, errCb) {
        callApi('post', `/login/google`, cb, {
            data: {
                access_token,
            }
        }, errCb);
    },
}
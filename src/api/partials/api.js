import axios from 'axios';
import _ from 'lodash';
import store from '@/store'
import router from '@/router';

let apiStatus = {};
let loadingCount = 0;

let toggleLoading = (display, displayLoading) => {
    if (!displayLoading) return;

    if (display) {
        loadingCount++;
    } else {
        loadingCount--;
    }

    if (loadingCount > 0) {
        store.commit('loading/setDisplay', true);
    } else {
        loadingCount = 0;
        store.commit('loading/setDisplay', false);
    }
};

export default (baseURL, method, url, cb, config = {}, errCb) => {
    let isStillGetting = _.get(apiStatus, url, false);
    // let langCode = 'en';

    // switch (store.state.lang) {
    //     case 'zhTw':
    //         langCode = 'zh-TW'
    //         break;
    //     case 'zhHk':
    //         langCode = 'zh-CN'
    //         break;
    // }

    // let getLang = {
    //     locale: langCode
    // }

    if (!isStillGetting) {
        _.set(apiStatus, url, true);

        // if (method == "get") {
        //     config.params = Object.assign(getLang, config.params);
        // } else {
        //     if (typeof config.data != "undefined") {
        //         config.data = Object.assign(config.data, getLang);
        //     } else {
        //         config.data = getLang;
        //     }
        // }

        let defaultConfig = {
            baseURL,
            method,
            url,
            displayLoading: true,
        };

        let usingConfig = Object.assign(defaultConfig, config);
        toggleLoading(true, usingConfig.displayLoading);

        axios(usingConfig).then((response) => {
            let outString = _.get(response, 'status');          // maybe call 'data.result'
            if (outString == '200') {
                if (cb) {
                    cb(_.get(response, 'data'));                // maybe call 'data.data'
                }
            } else {
                let message = _.get(response, 'statusText');    // maybe call 'data.message'
                if (errCb) {
                    errCb(message, outString);
                } else {
                    alert(JSON.stringify(message));
                }
            }

            _.unset(apiStatus, url);

            toggleLoading(false, usingConfig.displayLoading);
        }).catch((error) => {
            _.unset(apiStatus, url);
            toggleLoading(false, usingConfig.displayLoading);

            let status = error.status;

            if (status == 401) {
                store.dispatch('member/logout');
            } else if (status == 403 || status == 404) {
                router.push({
                    name: 'home'
                });
            } else {
                alert('伺服器連線異常');
            }
        });
    }
};
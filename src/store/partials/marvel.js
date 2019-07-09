import { getStorage } from './locker'
import _ from 'lodash'

export let getApiToken = () => {
    let api_token = getStorage('api_token');

    if (!_.isString(api_token) || _.isEmpty(api_token)) {
        api_token = '';
    }
    
    return api_token;
};
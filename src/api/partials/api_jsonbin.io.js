import callApi from './api';

let baseURL = process.env.VUE_APP_JSONBINIO_API_URL;

export default (method, url, cb, config = {}, errCb) => {
    callApi(baseURL, method, url, cb, config, errCb)
}
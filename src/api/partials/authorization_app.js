// jsonbin
// import store from '@/store'

export default (headers = {}) => {
    return {
        headers: {
            Authorization: `token 4c9da477-3408-4cce-81fd-f9894223b06d`,    // maybe call 'Bearer ${store.getters['marvel/apiToken']}'
            ...headers,
        }
    };
};
import callApi from './partials/api_imgur';
import authorization from './partials/authorization_imgur'

export default {
    getImgur({
        id,
    }, cb) {
        callApi('get', `/${id}`, cb, {
            ...authorization({
                'Content-Type': 'multipart/form-data',
            }),
        });
    },
    delImgur({
        id,
    }, cb) {
        callApi('delete', `/${id}`, cb, {
            ...authorization({
                'Content-Type': 'multipart/form-data',
            }),
        });
    },
    upload({
        image,
        title,
        description
    }, cb) {
        let form = new FormData();
        form.append('image', image);
        form.append('title', title);
        form.append('description', description);

        callApi('post', '/', cb, {
            data: form,
            ...authorization({
                'Content-Type': 'multipart/form-data',
            }),
        });
    },
}
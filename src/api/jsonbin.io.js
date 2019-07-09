import callApi from './partials/api_jsonbin.io';
import authorization from './partials/authorization_jsonbin.io'

export default {
    byJsonBinGetMarvelCouple(cb) {
        callApi('get', `/latest`, cb, {
            ...authorization({
                'secret-key': '$2a$10$YVXe2Ea8Pp/ECunFMbrsVOX780rXVkDPDToeYf21HPvbdSLOJT16S',
                'Content-Type': 'application/json',
            }),
        });
    },
    byJsonBinPutMarvelCouple(data, cb) {
        callApi('put', `/`, cb, {
            data: data,
            ...authorization({
                'secret-key': '$2a$10$YVXe2Ea8Pp/ECunFMbrsVOX780rXVkDPDToeYf21HPvbdSLOJT16S',
                'Content-Type': 'application/json',
            }),
        });
    },
}
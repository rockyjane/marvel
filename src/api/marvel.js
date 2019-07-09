import callApi from './partials/api_app';
import authorization from './partials/authorization_app'

export default {
    getMarvelCouple(cb) {
        callApi('get', `/couple`, cb, {
            ...authorization({
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'application/json',
            }),
        });
    },
    patchMarvelCouple({
        husband,
        husbandNickname,
        husbandCover,
        husbandIntro,
        husbandAbilities,
        wife,
        wifeNickname,
        wifeCover,
        wifeIntro,
        wifeAbilities,
        id,
    }, cb) {
        callApi('patch', `/couple`, cb, {
            data: {
                husband,
                husbandNickname,
                husbandCover,
                husbandIntro,
                husbandAbilities,
                wife,
                wifeNickname,
                wifeCover,
                wifeIntro,
                wifeAbilities,
                id
            },
            ...authorization(),
        });
    },
}
// 若是有配合後端將可把各大「社交軟件登入後的資訊」傳給「自家的 api 後台」進行判斷後拿取個資
// 以下均為參考，無法使用，因為無前案的 token

// import callApi from './partials/api';

// export default {
//     // 經銷商登入
//     login({
//         account,
//         password
//     }, cb, errCb) {
//         callApi('post', `/login`, cb, {
//             data: {
//                 account,
//                 password,
//             }
//         }, errCb);
//     },

//     //google登入
//     googleLogin({
//         access_token,
//     }, cb, errCb) {
//         callApi('post', `/login/google`, cb, {
//             data: {
//                 access_token,
//             }
//         }, errCb);
//     },

//     //facebook登入
//     facebookLogin({
//         access_token,
//     }, cb, errCb) {
//         callApi('post', `/login/facebook`, cb, {
//             data: {
//                 access_token,
//             }
//         }, errCb);
//     },

//     //社群註冊
//     socialRegister({
//         email,
//         refer_member_no,
//         country_id,
//         confirm_terms,
//         provider,
//         access_token,
//     }, cb, errCb) {
//         callApi('post', `/register`, cb, {
//             data: {
//                 email,
//                 refer_member_no,
//                 country_id,
//                 confirm_terms,
//                 provider,
//                 access_token,
//             }
//         }, errCb);
//     },

//     //經銷商註冊
//     register({
//         name,
//         account,
//         email,
//         password,
//         password_confirmation,
//         gender,
//         refer_member_no,
//         country_id,
//         confirm_terms,
//     }, cb, errCb) {
//         callApi('post', `/register`, cb, {
//             data: {
//                 name,
//                 account,
//                 email,
//                 password,
//                 password_confirmation,
//                 gender,
//                 refer_member_no,
//                 country_id,
//                 confirm_terms,
//             }
//         }, errCb);
//     }
// }
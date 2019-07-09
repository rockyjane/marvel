// imgur
export default (headers = {}) => {
    return {
        headers: {
            Authorization: `Bearer f240474fe6799634b6779c171226c0be55a1c064`,
            ...headers,
        }
    };
};
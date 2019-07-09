// jsonbin.io
export default (headers = {}) => {
    return {
        headers: {
            Authorization: `secret-key $2a$10$YVXe2Ea8Pp/ECunFMbrsVOX780rXVkDPDToeYf21HPvbdSLOJT16S`,
            ...headers,
        }
    };
};
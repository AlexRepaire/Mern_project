import httpCommon from "./http-common";

export const setAuthToken = token => {
    if (token) {
        httpCommon.defaults.headers.common['Authorization'] = token;
    } else {
        delete httpCommon.defaults.headers.common['Authorization'];
    }
    return;
};
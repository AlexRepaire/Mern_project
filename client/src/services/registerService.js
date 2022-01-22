import http from '../utils/http-common';

const postRegister = (newUser) => {
    return http.post('/api/users', newUser);
};

const registerService = {
    postRegister,
};

export default registerService;
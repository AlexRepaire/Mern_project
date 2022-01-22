import http from '../utils/http-common';

const loadUser = () => {
    return http.get('/api/auth');
};

const loginUser = (data) => {
    return http.post('/api/auth', data);
};

const authService = {
    loadUser,
    loginUser
};

export default authService;
import http from '../utils/http-common';

const getCurrentProfile = () => {
    return http.get('/api/profile/me');
};

const getProfileById = (userId) => {
    return http.get(`/api/profile/user/${userId}`);
};

const getProfiles = () => {
    return http.get('/api/profile');
};

const getGithubRepos = (username) => {
    return http.get(`/api/profile/github/${username}`);
};

const createProfile = (data) => {
    return http.post('/api/profile', data);
};

const addExperience = (data) => {
    return http.put('/api/profile/experience', data);
};

const addEducation = (data) => {
    return http.put('/api/profile/education', data);
};

const deleteExperience = (id) => {
    return http.delete(`/api/profile/experience/${id}`);
}

const deleteEducation = (id) => {
    return http.delete(`/api/profile/education/${id}`);
}

const deleteAccount = () => {
    return http.delete('/api/profile');
}

const profileService = {
    getCurrentProfile,
    createProfile,
    addExperience,
    addEducation,
    deleteExperience,
    deleteEducation,
    deleteAccount,
    getProfiles,
    getProfileById,
    getGithubRepos
};

export default profileService;
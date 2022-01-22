import { ACCOUNT_DELETED, CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, GET_REPOS, PROFILE_ERROR, UPDATE_PROFILE } from "./types";
import profileService from '../services/profileService';
import { setAlert } from "./alert";

export const getCurrentProfile = () => {
    return async (dispatch) => {
        try {
            const res = await profileService.getCurrentProfile();
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: CLEAR_PROFILE
            })
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}

export const createProfile = (formData, navigate, edit = false) => {
    return async (dispatch) => {
        try {
            const res = await profileService.createProfile(formData);
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
            dispatch(setAlert(edit ? 'Profil mis à jours' : 'Profil créer', 'success'));

            if (!edit) {
                navigate('/private/dashboard');
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, 'danger'));
                });
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const addExperience = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const res = await profileService.addExperience(formData);
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            });
            dispatch(setAlert('Expérience ajoutée', 'success'));
            navigate('/private/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, 'danger'));
                });
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}

export const addEducation = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const res = await profileService.addEducation(formData);
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            });
            dispatch(setAlert('Education ajoutée', 'success'));
            navigate('/private/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, 'danger'));
                });
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deleteExperience = (id) => {
    return async (dispatch) => {
        try {
            const res = await profileService.deleteExperience(id);
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            })
            dispatch(setAlert('Experience suprimée', 'success'));

        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deleteEducation = (id) => {
    return async (dispatch) => {
        try {
            const res = await profileService.deleteEducation(id);
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            })
            dispatch(setAlert('Education suprimée', 'success'));

        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deleteAccount = () => {
    return async (dispatch) => {
        if (window.confirm('Etes vous sur ? Cette action est irréversible, votre compte sera définitivement supprimé')) {
            try {
                await profileService.deleteAccount();
                dispatch({
                    type: CLEAR_PROFILE
                })
                dispatch({
                    type: ACCOUNT_DELETED
                })
                dispatch(setAlert('Le compte a été supprimé définitivement', 'success'));

            } catch (err) {
                dispatch({
                    type: PROFILE_ERROR,
                    payload: {
                        msg: err.response.statusText,
                        status: err.response.status
                    }
                })
            }

        }

    }
};

export const getProfiles = () => {
    return async (dispatch) => {
        try {
            const res = await profileService.getProfiles();
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const getProfileById = (userId) => {
    return async (dispatch) => {
        try {
            const res = await profileService.getProfileById(userId);
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const getGithubRepos = (username) => {
    return async (dispatch) => {
        try {
            const res = await profileService.getGithubRepos(username);
            dispatch({
                type: GET_REPOS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data.data
    }
};
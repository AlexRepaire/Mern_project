import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADER, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from "./types";
import registerService from '../services/registerService';
import authService from '../services/authService';
import { setAlert } from "./alert";
import { setAuthToken } from '../utils/setAuthToken';

export const register = ({ name, email, password }) => {
    return async (dispatch) => {
        const body = { name, email, password };

        try {
            const res = await registerService.postRegister(body);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser());
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, 'danger'));
                });
            }
            dispatch({
                type: REGISTER_FAIL
            })
        }
    }
};

export const loadUser = () => {
    return async (dispatch) => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res = await authService.loadUser();
            dispatch({
                type: USER_LOADER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        const body = { email, password };
        try {
            const res = await authService.loginUser(body);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser());
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, 'danger'));
                });
            }
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_PROFILE
        });
        dispatch({
            type: LOGOUT
        });
    }
}
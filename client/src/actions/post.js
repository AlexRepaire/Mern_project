import postService from "../services/postService";
import { setAlert } from "./alert";
import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, GET_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const res = await postService.getPosts();
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            const res = await postService.getPost(id);
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response,
                    status: err.response
                }
            })
        }
    }
};

export const addLike = (id) => {
    return async (dispatch) => {
        try {
            const res = await postService.addLike(id);
            dispatch({
                type: UPDATE_LIKES,
                payload: { id, likes: res.data }
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deleteLike = (id) => {
    return async (dispatch) => {
        try {
            const res = await postService.deleteLike(id);
            dispatch({
                type: UPDATE_LIKES,
                payload: { id, likes: res.data }
            })
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            const res = await postService.deletePost(id);
            dispatch({
                type: DELETE_POST,
                payload: id
            });
            dispatch(setAlert('Publication supprimée', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const addPost = (formData) => {
    return async (dispatch) => {
        try {
            const res = await postService.addPost(formData);
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
            dispatch(setAlert('Publication ajoutée', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const addComment = (postId, formData) => {
    return async (dispatch) => {
        try {
            const res = await postService.addComment(postId, formData);
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            });
            dispatch(setAlert('Commentaire ajouté', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};

export const deleteComment = (postId, commentId) => {
    return async (dispatch) => {
        try {
            await postService.deleteComment(postId, commentId);
            dispatch({
                type: DELETE_COMMENT,
                payload: commentId
            });
            dispatch(setAlert('Commentaire supprimé', 'success'));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
};
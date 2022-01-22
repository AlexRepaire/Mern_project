import http from '../utils/http-common';

const getPosts = () => {
    return http.get('/api/posts');
};

const getPost = (id) => {
    return http.get(`/api/posts/${id}`);
};

const addLike = (postId) => {
    return http.put(`/api/posts/like/${postId}`);
};

const deleteLike = (postId) => {
    return http.put(`/api/posts/unlike/${postId}`);
};

const deletePost = (postId) => {
    return http.delete(`/api/posts/${postId}`);
};

const addPost = (data) => {
    return http.post('/api/posts/', data);
};

const addComment = (postId, formData) => {
    return http.post(`/api/posts/comment/${postId}`, formData);
};

const deleteComment = (postId, commentId) => {
    return http.delete(`/api/posts/comment/${postId}/${commentId}`);
};

const postService = {
    getPosts,
    addLike,
    deleteLike,
    deletePost,
    addPost,
    getPost,
    addComment,
    deleteComment
};

export default postService;
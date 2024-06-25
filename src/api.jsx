import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchBlogs = async () => {
    const response = await axiosInstance.get('/blogs');
    return response.data;
};

export const fetchBlogById = async (id) => {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
};

export const createBlog = async (blog) => {
    const response = await axiosInstance.post('/blogs', blog);
    return response.data;
};

export const updateBlog = async (id, blog) => {
    const response = await axiosInstance.put(`/blogs/${id}`, blog);
    return response.data;
};

export const deleteBlog = async (id) => {
    const response = await axiosInstance.delete(`/blogs/${id}`);
    return response.data;
};

export const fetchComments = async (blogId) => {
    const response = await axiosInstance.get(`/comments/${blogId}`);
    return response.data;
};

export const createComment = async (blogId, comment) => {
    const response = await axiosInstance.post(`/comments/${blogId}`, comment);
    return response.data;
};

export const deleteComment = async (commentId) => {
    const response = await axiosInstance.delete(`/comments/${commentId}`);
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

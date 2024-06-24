import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';


// GET - Read all blogs
export const fetchBlogs = async () => {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data;
}

// GET - Read one blog
export const fetchBlogById = async (id) => {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
}

// POST - Create new blog
export const createBlog = async (blog) => {
    const response = await axios.post(`${API_URL}/blog`, blog);
    return response.data;
}

// PUT - Update Blog
export const updateBlog = async (id, blog) => {
    const response = await axios.put(`${API_URL}/blogs/${id}`, blog);
    return response.data;
}

// DELETE - Delete Blog
export const deleteBlog = async (id) => {
    const response = await axios.delete(`${API_URL}/blogs/${id}`);
    return response.data;
}

// GET - Read all comments
export const fetchCommentsByBlog = async (blogId) => {
    const response = await axios.get(`${API_URL}/comments/${blogId}`);
    return response.data;
}

// POST - create a Comment
export const createComment = async (blogId, comment) => {
    const response = axios.post(`${API_URL}/comments${blogId}`, comment);
    return response.data;
}

// DELETE - delete a comment
export const deleteComment = async (commentId) => {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`);
    return response.data;
}

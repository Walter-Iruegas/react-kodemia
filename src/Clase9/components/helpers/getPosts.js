import axios from 'axios';
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";


export const getPostsByUserId = (userId) => {
    return axios.get(`${POSTS_URL}?userId=${userId}`);
}
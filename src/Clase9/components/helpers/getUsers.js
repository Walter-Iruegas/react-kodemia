import axios from 'axios';
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getUserByID = (userId = 1) => {
    return axios.get(`${USERS_URL}/${userId}`)
}




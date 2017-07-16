import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1050';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);//request is a promise not the actual data, redux promise will resolve into the data response
    return {    
        type: FETCH_POSTS,
        payload: request
    };
}
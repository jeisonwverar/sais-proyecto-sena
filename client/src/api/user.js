import axios from './axios.js';

export const getUsersRequest=()=>axios.get('/users');
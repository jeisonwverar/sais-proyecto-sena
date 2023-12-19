import axios from './axios.js';

export const getUsersRequest=()=>axios.get('/users');

export const getDeleteUsersRequest=()=>axios.get('/deleted/users');
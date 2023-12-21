import axios from './axios.js';

export const getUsersRequest=()=>axios.get('/users');
export const getUserRequest=(id)=>axios.get(`/users/${id}`);


export const updateUsersRequest=(id,user)=>axios.put(`/users/${id}`,user);
export const deleteUsersRequest=(id)=>axios.delete(`/users/${id}`)


export const getDeleteUsersRequest=()=>axios.get('/deleted/users');
export const updateRestoreRequest=(id)=>axios.patch(`/deleted/users/${id}`)
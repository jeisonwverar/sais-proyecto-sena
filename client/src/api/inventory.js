import axios from './axios.js';

export const getInventoryRequest =()=>axios.get('inventory');
export const getInventoryOutputRequest=()=>axios.get('/inventory/output');
export const getInventoryEntryRequest=()=>axios.get('/inventory/entry');
export const getInventoryRefoundRequest=()=>axios.get('/inventory/refund');

export const createInventoryRequest=(inventory)=>axios.post('/inventory',inventory);
export const updateInventoryRequest=(id,inventory)=>axios.put(`/inventory/${id}`,inventory);
export const deleteInventoryRequest=(id)=>axios.delete(`/inventory/${id}`);
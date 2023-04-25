const { VITE_SERVER_URL } = import.meta.env;

export const SERVER_URL = VITE_SERVER_URL as string;
console.log('SERVER_URL', SERVER_URL);
const API_URL = SERVER_URL + '/api' ?? 'https://hidrasport.com.ar/api';

export const PRODUCTS = `${API_URL}/store/products/`;
export const AUTH = `${API_URL}/accounts/`;

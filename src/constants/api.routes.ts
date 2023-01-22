const { VITE_API_URL } = import.meta.env;

const API_URL = (VITE_API_URL as string) ?? 'https://hidrasport.com.ar/api/';

export const PRODUCTS = `${API_URL}store/products/`;
export const AUTH = `${API_URL}accounts/`;

const { VITE_SERVER_URL } = import.meta.env;

export const SERVER_URL: string =
	VITE_SERVER_URL[VITE_SERVER_URL.length - 1] === '/'
		? VITE_SERVER_URL.slice(0, -1)
		: VITE_SERVER_URL ?? 'https://hidrasport.com.ar';

const API_URL = SERVER_URL + '/api' ?? 'https://hidrasport.com.ar/api';

export const PRODUCTS = `${API_URL}/store/products/`;
export const AUTH = `${API_URL}/accounts/`;

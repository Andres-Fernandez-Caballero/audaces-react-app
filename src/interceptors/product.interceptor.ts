import { IProduct, IProductListResponse } from '@/interfaces/IProduct';
import axios from 'axios';
import { PRODUCTS } from '../constants/api.routes';

const APIKit = axios.create({
	baseURL: PRODUCTS,
	timeout: 10000,
});

// APIKit.interceptors.request.use(logerInterceptor);

// APIKit.interceptors.request.use(request => {
// 	console.log('agregado control origenes');
// 	request.headers = {
// 		'Access-Control-Allow-Origin': `${PRODUCTS}/*`,
// 		'Access-Control-Allow-Methods': 'GET, POST, PUT',
// 		'Access-Control-Allow-Headers': 'Content-Type',
// 	};
// 	return request;
// });

export const consultaProducto = async (): Promise<IProductListResponse> => {
	const response = await APIKit.get('');
	return response.data;
};

export const productById = async (id: string): Promise<IProduct> => {
	const response = await APIKit.get(`/${id}/`);
	return response.data;
};

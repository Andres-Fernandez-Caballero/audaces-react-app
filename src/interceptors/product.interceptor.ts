import axios from 'axios';
import { PRODUCTS } from '../constants/api.routes';
import { logerInterceptor } from './basics.Interceptor';

const APIKit = axios.create({
	baseURL: PRODUCTS,
	timeout: 10000,
	// withCredentials: true,
});

APIKit.interceptors.request.use(logerInterceptor);

// APIKit.interceptors.request.use(request => {
// 	console.log('agregado control origenes');
// 	request.headers = {
// 		'Access-Control-Allow-Origin': `${PRODUCTS}/*`,
// 		'Access-Control-Allow-Methods': 'GET, POST, PUT',
// 		'Access-Control-Allow-Headers': 'Content-Type',
// 	};
// 	return request;
// });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const consultaProducto = async () => {
	const response = await APIKit.get('');
	return response.data;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const productById = async (id: string) => {
	const response = await APIKit.get(`/${id}/`);
	return response.data;
};

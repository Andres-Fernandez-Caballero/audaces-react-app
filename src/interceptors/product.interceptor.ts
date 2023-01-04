import axios from 'axios';
import { IApiAllProductsResponse } from '@/interfaces/IAPI';
import { API_URL, ENDPOINTS } from '../constants/api.routes';
import { logerInterceptor } from './basics.Interceptor';
import { IProduct } from '@/interfaces/IProduct';

const APIKit = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

APIKit.interceptors.request.use(logerInterceptor);

export async function allProducts(): Promise<IApiAllProductsResponse> {
	const response = await APIKit.get(ENDPOINTS.PRODUCTS);
	return response.data as IApiAllProductsResponse;
}

export async function productById(id: number): Promise<IProduct> {
	const response = await APIKit.get(`${ENDPOINTS.PRODUCTS}${id}/`);
	console.log('response get by id ', response);

	return response.data;
}

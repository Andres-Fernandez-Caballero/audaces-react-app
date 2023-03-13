import { IProduct, IProductListResponse } from '@/interfaces/IProduct';
import axios from 'axios';
import { PRODUCTS } from '@constants/api.routes';

const APIKit = axios.create({
	baseURL: PRODUCTS,
	timeout: 10000,
});

export const getProducts = async (): Promise<IProductListResponse> => {
	const response = await APIKit.get('');
	return response.data;
};

export const productById = async (id: string): Promise<IProduct> => {
	const response = await APIKit.get(`/${id}/`);
	return response.data;
};

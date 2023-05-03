import axios from 'axios';
import { CART } from '@constants/api.routes';
import {
	ICart,
	ICartModifyResponse,
	ICartSubProductRequest,
} from '@slices/cart/cart.interface';

const cartInterceptor = axios.create({
	baseURL: CART,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getCart = async (): Promise<ICart[]> => {
	const response = await cartInterceptor.get('');
	return Object.values(response.data);
};

export const addToCart = async (
	subProduct: ICartSubProductRequest
): Promise<ICartModifyResponse> => {
	subProduct.quantity = 1;
	const action = 'add';
	const query = `modify/${subProduct.subProductId}/${subProduct.size}/${action}/${subProduct.quantity}`;
	console.log('cart query', query);
	const response = await cartInterceptor.get(query);
	return response.data;
};

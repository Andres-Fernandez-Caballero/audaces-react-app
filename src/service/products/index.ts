import config from '@/config';
import {
	consultaProducto,
	productById,
} from '@/interceptors/product.interceptor';
import { IProduct } from '@/interfaces/IProduct';
import productsApiMok from '@tests/api/products.mock.json';

export const getAllProducts: () => Promise<IProduct[]> = async () => {
	return config.mode === 'development'
		? await new Promise(resolve => resolve(productsApiMok.results))
		: await consultaProducto();
};

export const getProductById: (id: string) => Promise<IProduct> = async (
	id: string
) => {
	return config.mode === 'development'
		? await new Promise((resolve, reject) => {
				const product = productsApiMok.results.find(
					p => p.id === Number(id)
				) as IProduct;
				resolve(product);
		  })
		: await productById(id);
};

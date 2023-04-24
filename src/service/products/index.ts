import config from '@/config';
import { getProducts, productById } from '@/interceptors/product.interceptor';
import { IProduct } from '@/interfaces/IProduct';
import productsApiMok from '@tests/api/products.mock.json';
import Product from '@/models/product';

export const getAllProducts: () => Promise<Product[]> = async () => {
	return config.mode === 'test'
		? await new Promise(resolve =>
				resolve(productsApiMok.results.map(p => new Product(p)))
		  )
		: (await getProducts()).results.map(p => new Product(p));
};

export const getProductById: (id: string) => Promise<Product> = async (
	id: string
) => {
	return config.mode === 'test'
		? await new Promise(resolve => {
				const product = productsApiMok.results.find(
					p => p.id === Number(id)
				) as IProduct;
				resolve(new Product(product));
		  })
		: new Product(await productById(id));
};

import { allProducts, productById } from '@/interceptors/product.interceptor';
import { IProduct } from '@/interfaces/IProduct';

export async function getAllProducts(): Promise<IProduct[]> {
	const allProductsResponse = await allProducts();
	return allProductsResponse.results;
}

export async function getProductById(id: number): Promise<IProduct> {
	const productByIdResponse = await productById(id);
	return productByIdResponse;
}

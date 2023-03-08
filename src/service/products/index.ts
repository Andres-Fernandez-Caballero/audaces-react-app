import config from '@/config';
import { getProducts, productById } from '@/interceptors/product.interceptor';
import { IProduct } from '@/interfaces/IProduct';
import productsApiMok from '@tests/api/products.mock.json';
import { SERVER_URL } from '@constants/api.routes';

export const getAllProducts: () => Promise<IProduct[]> = async () => {
	return config.mode === 'test'
		? await new Promise(resolve => resolve(productsApiMok.results))
		: (await getProducts()).results.map((p: IProduct) => {
				const subProductos = p.subproducto.map(sp => {
					function reemplaceLocalhost(image: string): string {
						const urlSplit = image.split('http://localhost:8000');

						return SERVER_URL + urlSplit[1];
					}

					return {
						...sp,
						images: sp.images.map(i => {
							return { image: reemplaceLocalhost(i.image) };
						}),
					};
				});
				return {
					...p,
					subproducto: subProductos,
				};
		  });
};

export const getProductById: (id: string) => Promise<IProduct> = async (
	id: string
) => {
	return config.mode === 'test'
		? await new Promise(resolve => {
				const product = productsApiMok.results.find(
					p => p.id === Number(id)
				) as IProduct;
				resolve(product);
		  })
		: await productById(id);
};

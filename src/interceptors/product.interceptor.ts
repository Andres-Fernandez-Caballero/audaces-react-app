import { IProduct, IProductListResponse } from '@/interfaces/IProduct';
import axios, { AxiosResponse } from 'axios';
import { PRODUCTS, SERVER_URL } from '@constants/api.routes';

const APIKit = axios.create({
	baseURL: PRODUCTS,
	timeout: 10000,
});

export const getProducts = async (): Promise<IProductListResponse> => {
	const response: AxiosResponse<IProductListResponse> = await APIKit.get('');
	const productsMapped = response.data.results.map(remapProduct);

	return { ...response.data, results: productsMapped };
};

export const productById = async (id: string): Promise<IProduct> => {
	const response: AxiosResponse<IProduct> = await APIKit.get(`/${id}/`);
	return remapProduct(response.data);
};

function remapProduct(p: IProduct): IProduct {
	const subProducts = p.subproducto.map(sp => {
		return {
			...sp,
			images: sp.images.map(i => {
				return { image: reemplaceLocalhost(i.image) };
			}),
		};
	});
	return {
		...p,
		subproducto: subProducts,
	};

	function reemplaceLocalhost(image: string): string {
		const urlSplit = image.split('http://localhost:8000');

		return SERVER_URL + urlSplit[1];
	}
}

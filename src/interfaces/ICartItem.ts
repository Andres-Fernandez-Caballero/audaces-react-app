import { IProduct } from '@interfaces/IProduct';

export interface ICartItem {
	product: IProduct;
	quantity: number;
}

import { IProduct, Subproducto } from '@interfaces/IProduct';

export interface ICartItem {
	product: IProduct;
	subProduct: Subproducto;
	quantity: number;
	color?: string;
	talle?: string;
	id?: number;
}

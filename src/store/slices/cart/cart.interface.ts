import { ICartItem } from '@interfaces/ICartItem';

export interface ICartState {
	cart: ICartItem[];
	totalAmount: number;
}

export interface ICartUpdateQuantityPayload {
	cartItem: ICartItem;
	quantity: number;
}

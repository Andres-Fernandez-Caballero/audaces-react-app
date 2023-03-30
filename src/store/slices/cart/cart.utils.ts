import { ICartItem } from '@interfaces/ICartItem';

export const calculateTotalAmount = (cart: ICartItem[]): number => {
	return cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);
};

export const findCartItem = (
	cart: ICartItem[],
	cartItem: ICartItem
): ICartItem | undefined => {
	return cart.find(item => isTheSameCartItem(item, cartItem)) === undefined
		? undefined
		: cartItem;
};

export const isTheSameCartItem = (
	item: ICartItem,
	otherItem: ICartItem
): boolean => {
	return (
		item.product.id === otherItem.product.id &&
		item.subProduct.id === otherItem.subProduct.id &&
		item.color === otherItem.color &&
		item.talle === otherItem.talle
	);
};

export const updateItemInCart = (
	cart: ICartItem[],
	item: ICartItem
): ICartItem[] => {
	const index = cart.findIndex(cartItem => isTheSameCartItem(cartItem, item));
	cart[index] = item;
	return cart;
};

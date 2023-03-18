import { ICartItem } from '@interfaces/ICartItem';
import { COOKIES } from '@constants/globals';

export const getCartItemsFromLocalStorage = (): ICartItem[] => {
	const ls = localStorage.getItem(COOKIES.CART_ITEMS);
	if (ls === null) {
		return [] as ICartItem[];
	}
	return JSON.parse(ls) as ICartItem[];
};

export const addCartItemToCartInLocalStorage = (cartItem: ICartItem): void => {
	const cartItems = getCartItemsFromLocalStorage();

	const cartItemFind = cartItems.find(
		item => item.product.id === cartItem.product.id
	);

	if (cartItemFind !== undefined)
		throw new Error('the product already exists in the cart');

	const newCartItems = [...cartItems, cartItem];
	localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(newCartItems));
	console.log('item agregado al carrito');
};

export const removeCartItemFromCartInLocalStorage = (
	cartItem: ICartItem
): void => {
	const cartItems = getCartItemsFromLocalStorage();
	const ItemFind = cartItems.find(
		item => item.product.id === cartItem.product.id
	);
	if (ItemFind !== undefined) {
		const index = cartItems.indexOf(ItemFind);
		cartItems.splice(index, 1);
		localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(cartItems));
	}
};

export const clearCartInLocalStorage = (): void => {
	localStorage.removeItem(COOKIES.CART_ITEMS);
};

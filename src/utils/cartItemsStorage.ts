import { ICartItem } from '@interfaces/ICartItem';
import { COOKIES } from '@constants/globals';
import { isTheSameCartItem } from '@slices/cart/cart.utils';

export const getCartItemsFromLocalStorage = (): ICartItem[] => {
	const ls = localStorage.getItem(COOKIES.CART_ITEMS);
	if (ls === null) {
		return [] as ICartItem[];
	}
	return JSON.parse(ls) as ICartItem[];
};

export const addCartItemToCartInLocalStorage = (cartItem: ICartItem): void => {
	const cartItems = getCartItemsFromLocalStorage();

	const cartItemFind = cartItems.find(item =>
		isTheSameCartItem(item, cartItem)
	);

	if (cartItemFind !== undefined)
		throw new Error('El Producto ya existe en el carrito');

	const newCartItems = [...cartItems, cartItem];
	localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(newCartItems));
	console.log('item agregado al carrito');
};

export const removeCartItemFromCartInLocalStorage = (
	cartItem: ICartItem
): void => {
	const cartItems = getCartItemsFromLocalStorage();
	const ItemFind = cartItems.find(item => isTheSameCartItem(item, cartItem));
	if (ItemFind !== undefined) {
		const index = cartItems.indexOf(ItemFind);
		cartItems.splice(index, 1);
		localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(cartItems));
	}
};

export const clearCartInLocalStorage = (): void => {
	localStorage.removeItem(COOKIES.CART_ITEMS);
};

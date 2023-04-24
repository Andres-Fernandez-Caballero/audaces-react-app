import { afterEach, beforeEach, describe, expect } from 'vitest';
import {
	addCartItemToCartInLocalStorage,
	clearCartInLocalStorage,
	getCartItemsFromLocalStorage,
	removeCartItemFromCartInLocalStorage,
} from '@/utils/cartItemsStorage';
import { setCookie } from '@/utils/cookies';
import { COOKIES } from '@constants/globals';
import products from '@tests/api/products.mock.json';
import { ICartItem } from '@interfaces/ICartItem';

describe('cartItemStorage', () => {
	beforeEach(() => {
		localStorage.removeItem(COOKIES.CART_ITEMS);
	});
	afterEach(() => {
		localStorage.removeItem(COOKIES.CART_ITEMS);
	});

	it('should return an empty array if no items are stored', () => {
		const cartItems = getCartItemsFromLocalStorage();
		expect(cartItems).toEqual([]);
	});

	it('should return an array of items if items are stored', () => {
		const cartItemsData = [products.results[0], products.results[1]];
		localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(cartItemsData));
		const itemsInStorage = getCartItemsFromLocalStorage();
		expect(itemsInStorage).toEqual(cartItemsData);
		expect(itemsInStorage).toHaveLength(2);
	});

	it('should add a cart item to the cart', () => {
		const cartItemsData: ICartItem[] = [
			{
				product: products.results[0],
				subProduct: products.results[0].subproducto[0],
				quantity: 1,
				talle: 'M',
				color: 'Rojo',
			},
			{
				product: products.results[1],
				subProduct: products.results[1].subproducto[0],
				quantity: 1,
				talle: 'M',
				color: 'Rojo',
			},
			{
				product: products.results[2],
				subProduct: products.results[2].subproducto[0],
				quantity: 1,
				talle: 'M',
				color: 'Rojo',
			},
		];
		localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(cartItemsData));
		addCartItemToCartInLocalStorage({
			product: products.results[3],
			subProduct: products.results[3].subproducto[0],
			quantity: 1,
			talle: 'M',
			color: 'Rojo',
		});
		const itemsInStorage = getCartItemsFromLocalStorage();
		expect(itemsInStorage).toHaveLength(4);
	});

	it('should remove a  cart item from the cart', () => {
		const cartItemsData: ICartItem[] = [
			{
				product: products.results[0],
				subProduct: products.results[0].subproducto[0],
				quantity: 1,
				talle: 'M',
				color: 'Rojo',
			},

			{
				product: products.results[1],
				subProduct: products.results[1].subproducto[0],
				quantity: 1,
				talle: 'M',
				color: 'Rojo',
			},
		];
		localStorage.setItem(COOKIES.CART_ITEMS, JSON.stringify(cartItemsData));
		const cartToRemove: ICartItem = {
			product: products.results[0],
			subProduct: products.results[0].subproducto[0],
			talle: 'M',
			color: 'Rojo',
			quantity: 1,
		};
		removeCartItemFromCartInLocalStorage(cartToRemove);
		const itemsInStorage = getCartItemsFromLocalStorage();

		expect(itemsInStorage).toHaveLength(1);
		expect(itemsInStorage[0].product.id).toBe(products.results[1].id);
	});

	it('should remove all products from the cart', () => {
		const cartItemsData: ICartItem[] = [
			{
				product: products.results[0],
				subProduct: products.results[0].subproducto[0],
				talle: 'M',
				color: 'Rojo',
				quantity: 1,
			},
			{
				product: products.results[1],
				subProduct: products.results[1].subproducto[0],
				talle: 'M',
				color: 'Rojo',
				quantity: 1,
			},
			{
				product: products.results[2],
				subProduct: products.results[2].subproducto[0],
				talle: 'M',
				color: 'Rojo',
				quantity: 1,
			},
		];
		setCookie(COOKIES.CART_ITEMS, cartItemsData);
		clearCartInLocalStorage();

		const itemsInStorage = getCartItemsFromLocalStorage();
		expect(itemsInStorage).toHaveLength(0);
	});
});

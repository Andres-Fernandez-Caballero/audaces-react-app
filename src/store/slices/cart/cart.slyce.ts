import { ICartItem } from '@interfaces/ICartItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@interfaces/IProduct';
import { RootState } from '@/store';
import {
	addCartItemToCartInLocalStorage,
	getCartItemsFromLocalStorage,
	removeCartItemFromCartInLocalStorage,
} from '@/utils/cartItemsStorage';
import {
	ICartState,
	ICartUpdateQuantityPayload,
} from '@slices/cart/cart.interface';
import {
	calculateTotalAmount,
	findCartItem,
	updateItemInCart,
} from '@slices/cart/cart.utils';

const initState: ICartState = {
	cart: getCartItemsFromLocalStorage(),
	totalAmount: calculateTotalAmount(getCartItemsFromLocalStorage()),
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {
		setCart: (state: ICartState, action: PayloadAction<ICartItem[]>) => {
			state.cart = action.payload;
		},
		setTotalAmount: (state: ICartState, action: PayloadAction<number>) => {
			state.totalAmount = action.payload;
		},
		addToCart: (state: ICartState, action: PayloadAction<ICartItem>) => {
			const cartItemFound: ICartItem | undefined = findCartItem(
				state.cart,
				action.payload
			);
			if (cartItemFound === undefined) {
				addCartItemToCartInLocalStorage(action.payload);
				state.cart.push(action.payload);
			} else {
				const updatedItem = {
					...cartItemFound,
					quantity: cartItemFound.quantity + 1,
				};
				console.log('updatedItem', updatedItem);
				state.cart = updateItemInCart(state.cart, updatedItem);
				removeCartItemFromCartInLocalStorage(cartItemFound);
				addCartItemToCartInLocalStorage(updatedItem);
			}
		},
		removeFromCart: (state: ICartState, action: PayloadAction<ICartItem>) => {
			function removeCartItem(
				cart: ICartItem[],
				product: IProduct
			): ICartItem[] {
				return cart.filter(item => item.product.id !== product.id);
			}

			const cartItem = findCartItem(state.cart, action.payload);
			if (cartItem === undefined)
				throw new Error('El item no existe en e carrito');
			removeCartItemFromCartInLocalStorage(action.payload);
			state.cart = removeCartItem(state.cart, action.payload.product);
		},

		updateQuantityFromCartItem: (
			state: ICartState,
			action: PayloadAction<ICartUpdateQuantityPayload>
		) => {
			const cartItem = findCartItem(state.cart, action.payload.cartItem);
			if (cartItem === undefined)
				throw new Error('El producto no existe en el carrito');

			const updatedItem = {
				...cartItem,
				// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
				quantity: cartItem.quantity + action.payload.quantity,
			};

			state.cart = updateItemInCart(state.cart, updatedItem);
			state.totalAmount = calculateTotalAmount(state.cart);
			console.log('state.cart', state.cart);
			removeCartItemFromCartInLocalStorage(cartItem);
			addCartItemToCartInLocalStorage(updatedItem);
		},
	},
});

export const {
	updateQuantityFromCartItem,
	removeFromCart,
	addToCart,
	setCart,
	setTotalAmount,
} = cartSlice.actions;

export const selectCart = (state: RootState): ICartState => state.cart;

export default cartSlice.reducer;

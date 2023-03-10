import { ICartItem } from '@interfaces/ICartItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@interfaces/IProduct';
import { RootState } from '@/store';

export interface ICartState {
	cart: ICartItem[];
	totalAmount: number;
}

const initState: ICartState = {
	cart: [] as ICartItem[],
	totalAmount: 0,
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
			const cartItem = findCartItem(state.cart, action.payload.product);
			if (cartItem !== undefined) throw new Error('Cart item already exists');
			state.cart.push(action.payload);
		},
		removeFromCart: (state: ICartState, action: PayloadAction<ICartItem>) => {
			const cartItem = findCartItem(state.cart, action.payload.product);
			if (cartItem === undefined) throw new Error('Cart item does not exists');
			removeCartItem(state.cart, action.payload.product);
		},
		updateQuantityFromCartItem: (
			state: ICartState,
			action: PayloadAction<ICartItem>
		) => {
			const cartItem = findCartItem(state.cart, action.payload.product);
			if (cartItem === undefined) throw new Error('Cart item does not exists');
			cartItem.quantity = action.payload.quantity;
			state.totalAmount = calculateTotalAmount(state.cart);
		},
	},
});

const findCartItem = (
	cart: ICartItem[],
	product: IProduct
): ICartItem | undefined => {
	return cart.find(item => item.product.id === product.id);
};

const removeCartItem = (cart: ICartItem[], product: IProduct): ICartItem[] => {
	return cart.filter(item => item.product.id !== product.id);
};

const calculateTotalAmount = (cart: ICartItem[]): number => {
	return cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);
};

export const {
	updateQuantityFromCartItem,
	removeFromCart,
	addToCart,
	setCart,
	setTotalAmount,
} = cartSlice.actions;

export const selectCart = (state: RootState): ICartState => state.cart;

export default cartSlice.reducer;

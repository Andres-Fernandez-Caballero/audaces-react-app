import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import {
	ICart,
	ICartState,
	ICartSubProductRequest,
} from '@slices/cart/cart.interface';
import { addToCart, getCart } from '@/interceptors/cart.interceptor';

const initState: ICartState = {
	cart: [],
	totalAmount: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {
		setCart: (state: ICartState, action: PayloadAction<ICart[]>) => {
			state.cart = action.payload;
		},
		setTotalAmount: (state: ICartState, action: PayloadAction<number>) => {
			state.totalAmount = action.payload;
		},
	},
});

export const { setCart, setTotalAmount } = cartSlice.actions;

export const addItemToCart = (item: ICartSubProductRequest) => async () => {
	const response = await addToCart(item);
	console.log(response);
	const updatedCart = await getCart();
	setCart(updatedCart);
	console.log();
};

export const selectCart = (state: RootState): ICartState => state.cart;

export default cartSlice.reducer;

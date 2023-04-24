import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slyce';
import loadingSlice from './slices/loading.slyce';
import modalAuthSlice from './slices/modalAuth.slyce';
import cartSlice from '@slices/cart/cart.slyce';

const store = configureStore({
	reducer: {
		auth: authSlice,
		loading: loadingSlice,
		modalAuth: modalAuthSlice,
		cart: cartSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

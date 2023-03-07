import { configureStore } from '@reduxjs/toolkit';
import authSlyce from './slyces/auth.slyce';
import loadingSlyce from './slyces/loading.slyce';
import modalAuthSlyce from './slyces/modalAuth.slyce';

const store = configureStore({
	reducer: {
		auth: authSlyce,
		loading: loadingSlyce,
		modalAuth: modalAuthSlyce,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

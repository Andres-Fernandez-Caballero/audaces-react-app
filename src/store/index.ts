import { configureStore } from '@reduxjs/toolkit';
import authSlyce from './slyces/auth.slyce';
import loadingSlyce from './slyces/loading.slyce';

export default configureStore({
	reducer: {
		auth: authSlyce,
		loading: loadingSlyce,
	},
});

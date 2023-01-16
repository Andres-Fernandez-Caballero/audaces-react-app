import { configureStore } from '@reduxjs/toolkit';
import authSlyce from './slyces/auth.slyce';
import loadingSlyce from './slyces/loading.slyce';
import modalAuthSlyce from './slyces/modalAuth.slyce';

export default configureStore({
	reducer: {
		auth: authSlyce,
		loading: loadingSlyce,
		modalAuth: modalAuthSlyce,
	},
});

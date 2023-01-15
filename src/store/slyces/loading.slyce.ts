import { createSlice } from '@reduxjs/toolkit';
import { IAsyncState } from '../interfaces/state';

const initialState: IAsyncState = {
	loading: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		loadingOn: state => {
			state.loading = true;
		},
		loadingOff: state => {
			state.loading = false;
		},
	},
});

export const { loadingOn, loadingOff } = loadingSlice.actions;

export default loadingSlice.reducer;

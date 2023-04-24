import { createSlice } from '@reduxjs/toolkit';
import { IAsyncState } from '../interfaces/state';
import { RootState } from '@/store';

const initialState: IAsyncState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		loadingOn: state => {
			state.isLoading = true;
		},
		loadingOff: state => {
			state.isLoading = false;
		},
	},
});

export const { loadingOn, loadingOff } = loadingSlice.actions;

export const selectLoading = (state: RootState): IAsyncState => state.loading;

export default loadingSlice.reducer;

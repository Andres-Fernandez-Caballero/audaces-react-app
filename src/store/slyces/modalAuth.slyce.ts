import { createSlice } from '@reduxjs/toolkit';

export interface IModalModalState {
	isOpen: boolean;
}

const emptyState: IModalModalState = {
	isOpen: false,
};

const modalAuthSlice = createSlice({
	name: 'modalAuth',
	initialState: emptyState,
	reducers: {
		openModalAuth: (state: IModalModalState) => {
			state.isOpen = true;
		},
		closeModalAuth: (state: IModalModalState) => {
			state.isOpen = false;
		},
	},
});

export const { openModalAuth, closeModalAuth } = modalAuthSlice.actions;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export const selectModalState = (state: any) => state.modalAuth;
export default modalAuthSlice.reducer;

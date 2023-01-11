/* eslint-disable @typescript-eslint/ban-ts-comment */
import { signIn, signOut } from '@/service/auth';
import { createSlice } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '../interfaces/state';

export interface Iuser {
	email: string;
	uid: string;
}

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const emptyState: IAuthState = {
	user: null,
	isAuthenticate: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: emptyState,
	reducers: {
		setAuth: (state: IAuthState, action: any) => {
			state.user = action.payload;
			state.isAuthenticate = true;
		},
		clearAuth: (state: IAuthState) => {
			state.user = emptyState.user;
			state.isAuthenticate = false;
		},
	},
});

export const { setAuth, clearAuth } = authSlice.actions;

// @ts-expect-error
export const login = (email: string, password: string) => dispatch => {
	signIn(email, password)
		.then((userCredential: any) => {
			dispatch(setAuth(userCredential));
		})
		.catch((error: string | undefined) => {
			throw new Error(error);
		});
};

export const logout =
	() =>
	(
		dispatch: (arg0: { payload: undefined; type: 'auth/clearAuth' }) => void
	) => {
		signOut()
			.then(() => {
				dispatch(clearAuth());
			})
			.catch((error: string | undefined) => {
				throw new Error(error);
			});
	};
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectAuth = state => state.auth;
export default authSlice.reducer;

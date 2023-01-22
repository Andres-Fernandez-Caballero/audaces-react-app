/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IAuthLogin, IAuthResponse } from '@/interfaces/IAuth';
import { signIn, signOut } from '@/service/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '@/store/interfaces/state';
import { RootState } from '@/store';

export interface Iuser {
	email?: string;
	username: string;
	token: string;
}

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const emptyState: IAuthState = {
	user: null as Iuser | null,
	isAuthenticate: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: emptyState,
	reducers: {
		setAuth: (state: IAuthState, action: PayloadAction<Iuser>) => {
			state.user = action.payload;
			state.isAuthenticate = true;
		},
		clearAuth: (state: IAuthState) => {
			state.user = emptyState.user;
			state.isAuthenticate = false;
		},

		setIsAuthenticate: (state: IAuthState, action: PayloadAction<boolean>) => {
			state.isAuthenticate = action.payload;
		},

		setLoading(state: IAuthState, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
	},
});

export const { setAuth, clearAuth, setLoading, setIsAuthenticate } =
	authSlice.actions;

export const login =
	(dtoLogin: IAuthLogin) =>
	(
		dispatch: (arg0: {
			payload: boolean | Iuser;
			type: 'auth/setAuth' | 'auth/setLoading' | 'auth/setIsAuthenticate';
		}) => void
	) => {
		dispatch(setLoading(true));
		signIn(dtoLogin)
			.then((userCredential: IAuthResponse) => {
				dispatch(setAuth(userCredential));
				dispatch(setLoading(false));
				dispatch(setIsAuthenticate(true));
			})
			.catch((error: string | undefined) => {
				throw new Error(error);
			})
			.finally(() => {
				dispatch(setLoading(false));
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;

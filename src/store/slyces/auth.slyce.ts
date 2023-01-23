/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IAuthLogin, IAuthResponse } from '@/interfaces/IAuth';
import { signIn } from '@/service/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '@/store/interfaces/state';
import { RootState } from '@/store';
import Cookies from 'universal-cookie';
import { COOKIES } from '@/constants/globals';

export interface Iuser {
	email?: string;
	username: string;
	token: string;
}

export interface IAuthState extends IAsyncState, IStateWhitError {
	user: Iuser | null;
	isAuthenticate: boolean;
}

const initState = (): IAuthState => {
	const cookies = new Cookies();
	const credentials = cookies.get(COOKIES.AUTH_CREDENTIALS);
	if (credentials === undefined) {
		return {
			user: null,
			isAuthenticate: false,
			loading: false,
			error: null,
		};
	}

	return {
		user: credentials,
		isAuthenticate: true,
		loading: false,
		error: null,
	};
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initState(),
	reducers: {
		setAuth: (state: IAuthState, action: PayloadAction<Iuser>) => {
			state.user = action.payload;
			state.isAuthenticate = true;
		},
		clearAuth: (state: IAuthState) => {
			state.user = null;
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
				const cookies = new Cookies();
				cookies.set(COOKIES.AUTH_CREDENTIALS, JSON.stringify(userCredential), {
					path: '/',
				});
			})
			.catch((error: string | undefined) => {
				console.log('error no se concreto la transaccion', error);
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
		const cookies = new Cookies();
		cookies.remove(COOKIES.AUTH_CREDENTIALS);
		dispatch(clearAuth());
	};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;

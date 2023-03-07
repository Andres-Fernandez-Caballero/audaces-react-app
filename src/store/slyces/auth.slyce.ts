import {
	IAuthLogin,
	IAuthRegister,
	IAuthSuccessfulResponse,
} from '@/interfaces/IAuth';
import { signIn, signUp } from '@/service/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncState, IStateWhitError } from '@/store/interfaces/state';
import { RootState } from '@/store';
import Cookies from 'universal-cookie';
import { COOKIES } from '@/constants/globals';
import { removeCookie, setCookie } from '@/utils/cookies';
import { AxiosError } from 'axios';

export interface Iuser {
	email: string;
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
			state.error = null;
		},
		clearAuth: (state: IAuthState) => {
			state.user = null;
			state.isAuthenticate = false;
			state.error = null;
		},

		setIsAuthenticate: (state: IAuthState, action: PayloadAction<boolean>) => {
			state.isAuthenticate = action.payload;
		},

		setError: (state: IAuthState, action: PayloadAction<string>) => {
			state.error = action.payload;
		},

		setLoading(state: IAuthState, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
	},
});

export const { setAuth, clearAuth, setLoading, setIsAuthenticate, setError } =
	authSlice.actions;

export const login =
	(dtoLogin: IAuthLogin) =>
	async (
		dispatch: (arg0: {
			payload: boolean | Iuser | string | undefined;
			type: 'auth/setAuth' | 'auth/setLoading' | 'auth/setError';
		}) => void
	) => {
		dispatch(setLoading(true));
		try {
			const userCredential: IAuthSuccessfulResponse = await signIn(dtoLogin);
			setSession(userCredential)(dispatch);
		} catch (error) {
			handleError(error as AxiosError)(dispatch);
		} finally {
			dispatch(setLoading(false));
		}
	};

export const register =
	(dtoRegister: IAuthRegister) =>
	async (
		dispatch: (arg0: {
			payload: string | boolean | Iuser;
			type: 'auth/setAuth' | 'auth/setLoading' | 'auth/setError';
		}) => void
	) => {
		dispatch(setLoading(true));
		try {
			const userCredential = await signUp(dtoRegister);
			setSession(userCredential)(dispatch);
		} catch (error) {
			handleError(error as AxiosError)(dispatch);
			console.log(error);
		} finally {
			dispatch(setLoading(false));
		}
	};

const handleError =
	(error: AxiosError) =>
	(dispatch: (arg0: { payload: string; type: 'auth/setError' }) => void) => {
		if (error.response?.status === 401 || error.response?.status === 500) {
			dispatch(setError('credenciales incorrectas'));
		}
		throw new Error('Credenciales incorrectas -_-');
	};

export const logout =
	() =>
	(
		dispatch: (arg0: { payload: undefined; type: 'auth/clearAuth' }) => void
	) => {
		removeCookie(COOKIES.AUTH_CREDENTIALS);
		dispatch(clearAuth());
	};

const setSession =
	(userCredential: IAuthSuccessfulResponse) =>
	(dispatch: (arg0: { payload: Iuser; type: 'auth/setAuth' }) => void) => {
		const { email, username, token } = userCredential;
		const user = { email, username, token };
		setCookie(COOKIES.AUTH_CREDENTIALS, user);
		dispatch(setAuth(user));
	};

export const selectAuth = (state: RootState): IAuthState => state.auth;
export default authSlice.reducer;

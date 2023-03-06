import {
	IAuthLogin,
	IAuthRegister,
	IAuthSuccessfulResponse,
} from '@/interfaces/IAuth';
import axios from 'axios';

import { AUTH } from '@constants/api.routes';

const axioInstance = axios.create({
	baseURL: AUTH,
	timeout: 10000,
});

export const signIn = async (
	dtoLogin: IAuthLogin
): Promise<IAuthSuccessfulResponse> => {
	const response = await axioInstance.post('login/', dtoLogin);
	return response.data as IAuthSuccessfulResponse;
};

export const signUp = async (
	dtoRegister: IAuthRegister
): Promise<IAuthSuccessfulResponse> => {
	const response = await axioInstance.post('register/', dtoRegister);
	return response.data as IAuthSuccessfulResponse;
};

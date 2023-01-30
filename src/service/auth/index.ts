import { IAuthLogin, IAuthRegister, IAuthResponse } from '@/interfaces/IAuth';
import {
	signIn as interceptorSignIn,
	signUp as interceptorSignUp,
} from '@/interceptors/auth.interceptor';

export const signIn = async (dtoLogin: IAuthLogin): Promise<IAuthResponse> => {
	return await interceptorSignIn(dtoLogin);
};

export const signUp = async (
	createUserFormDto: IAuthRegister
): Promise<IAuthResponse> => {
	return await interceptorSignUp(createUserFormDto);
};

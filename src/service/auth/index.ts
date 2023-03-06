import {
	IAuthLogin,
	IAuthRegister,
	IAuthSuccessfulResponse,
} from '@/interfaces/IAuth';
import {
	signIn as interceptorSignIn,
	signUp as interceptorSignUp,
} from '@/interceptors/auth.interceptor';

export const signIn = async (
	dtoLogin: IAuthLogin
): Promise<IAuthSuccessfulResponse> => {
	return await interceptorSignIn(dtoLogin);
};

export const signUp = async (
	createUserFormDto: IAuthRegister
): Promise<IAuthSuccessfulResponse> => {
	return await interceptorSignUp(createUserFormDto);
};

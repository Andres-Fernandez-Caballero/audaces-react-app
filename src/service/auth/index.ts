import { IAuthLogin, IAuthRegister, IAuthResponse } from '@/interfaces/IAuth';
import {
	signIn as interceptorSignIn,
	signUp as interceotirSignUp,
} from '@/interceptors/auth.interceptor';

export const signIn = async (dtoLogin: IAuthLogin): Promise<IAuthResponse> => {
	const response = await interceptorSignIn(dtoLogin);
	return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signUp = async (createUserFormDto: IAuthRegister) => {
	const result = await interceotirSignUp(createUserFormDto);
	console.table(result);
};

// token 54f36dddd926970e9313dc405eac35e1b4c71cd2

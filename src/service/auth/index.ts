import { IAuthLogin, IAuthRegister, IAuthResponse } from '@/interfaces/IAuth';
import {
	signIn as interceptorSignIn,
	signUp as interceotirSignUp,
} from '@/interceptors/auth.interceptor';

export const signIn = async (dtoLogin: IAuthLogin): Promise<IAuthResponse> =>
	await new Promise((resolve, reject) => {
		interceptorSignIn(dtoLogin)
			.then(response => {
				localStorage.setItem('token', response.token);
				resolve(response);
			})
			.catch(error => {
				reject(error);
			});
	});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signOut = async () => {
	localStorage.removeItem('token');
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signUp = async (createUserFormDto: IAuthRegister) => {
	const result = await interceotirSignUp(createUserFormDto);
	console.table(result);
};

// token 54f36dddd926970e9313dc405eac35e1b4c71cd2

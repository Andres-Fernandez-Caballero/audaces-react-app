import { IAuthLogin } from '@interfaces/IAuth';
import { useState } from 'react';

export interface IUseDtoLogin {
	dtoLogin: IAuthLogin;
	setUserName: (username: string) => void;
	setPassword: (password: string) => void;
	resetLogin: () => void;
}

export const useDtoLogin = (): IUseDtoLogin => {
	const defaultLogin: IAuthLogin = {
		username: '',
		password: '',
	};

	const [dtoLogin, setDtoLogin] = useState(defaultLogin);

	function setUserName(username: string): void {
		setDtoLogin({ ...dtoLogin, username });
	}

	function setPassword(password: string): void {
		setDtoLogin({ ...dtoLogin, password });
	}

	function resetLogin(): void {
		setDtoLogin(defaultLogin);
	}

	return { dtoLogin, setUserName, setPassword, resetLogin };
};

import { IAuthRegister } from '@interfaces/IAuth';
import React from 'react';

export interface RegisterDtoHook {
	registerDto: IAuthRegister;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	resetRegisterDto: () => void;
}

export interface RegisterErrorHook {
	getError: (field: 'email' | 'password' | 'username' | 'password2') => string;
	setError: (
		error: string,
		field: 'email' | 'password' | 'username' | 'password2'
	) => void;
}

export interface RegisterProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

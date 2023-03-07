import { IAuthRegister } from '@interfaces/IAuth';
import React, { useState } from 'react';
import {
	RegisterDtoHook,
	RegisterErrorHook,
} from '@pages/Register/Register.interfaces';

export const useRegisterDto = (): RegisterDtoHook => {
	const initState: IAuthRegister = {
		email: '',
		username: '',
		password: '',
		password2: '',
	};

	const [registerDto, setRegisterDto] = useState(initState);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setRegisterDto({
			...registerDto,
			[e.target.name]: e.target.value,
		});
	};

	const resetRegisterDto = (): void => {
		setRegisterDto(initState);
	};

	return {
		registerDto,
		handleOnChange,
		resetRegisterDto,
	};
};

export const useError = (): RegisterErrorHook => {
	const initState: IAuthRegister = {
		email: '',
		username: '',
		password: '',
		password2: '',
	};
	const [errors, setErrors] = useState(initState);

	const getError = (
		field: 'email' | 'password' | 'username' | 'password2'
	): string => {
		return errors[field];
	};

	const setError = (
		error: string,
		field: 'email' | 'password' | 'username' | 'password2'
	): void => {
		setErrors({
			...errors,
			[field]: error,
		});
	};

	return { getError, setError };
};

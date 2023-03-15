import Register from '@pages/Register/Register';
import { useRegisterDto } from '@pages/Register/Register.hook';
import { register, setError } from '@store/slices/auth.slyce';
import { closeModalAuth } from '@store/slices/modalAuth.slyce';
import React from 'react';
import { useAppDispatch } from '@hooks/redux..hook';

const ComponentRegister = (): React.ReactElement => {
	const { registerDto, resetRegisterDto, handleOnChange } = useRegisterDto();
	const dispatch = useAppDispatch();
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (
			registerDto.username === '' ||
			registerDto.email === '' ||
			registerDto.password === '' ||
			registerDto.password2 === ''
		) {
			dispatch(setError('Todos los campos son obligatorios'));
			return;
		}

		if (registerDto.password !== registerDto.password2) {
			dispatch(setError('Las contraseñas no coinciden'));
			return;
		}

		if (registerDto.password.length < 6) {
			dispatch(setError('La contraseña debe tener al menos 6 caracteres'));
			return;
		}

		dispatch(register(registerDto))
			.then(() => {
				alert('Usuario creado');
				dispatch(closeModalAuth());
			})
			.catch(() => {
				alert('Error al crear usuario');
			})
			.finally(() => {
				resetRegisterDto();
			});
	};
	return <Register onSubmit={handleOnSubmit} onChange={handleOnChange} />;
};

export default ComponentRegister;

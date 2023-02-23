import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { IAuthRegister } from '@/interfaces/IAuth';
import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { register, selectAuth } from '@/store/slyces/auth.slyce';
import { closeModalAuth } from '@/store/slyces/modalAuth.slyce';

const Register: React.FC = () => {
	const auth = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (auth.isAuthenticate) {
			dispatch(closeModalAuth());
		}
	}, [auth.isAuthenticate, dispatch]);

	const initState: IAuthRegister = {
		username: '',
		email: '',
		password: '',
		password2: '',
	};
	const [formData, setFormData] = useState(initState);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(register(formData))
			.then(() => {
				alert('Usuario creado');
				dispatch(closeModalAuth());
			})
			.catch(() => {
				alert('Error al crear usuario');
			})
			.finally(() => {
				setFormData(initState);
			});
	};
	return (
		<>
			<form className='container' onSubmit={handleOnSubmit}>
				<article className='card border-0'>
					<h1 className='card-title text-center mt-4'>Crear Cuenta</h1>
					<article className='card-body py-md-4'>
						<div className='mb-3'>
							<label className='form-label'>Nombre de usuario</label>
							<div className='input-group col-sm-10'>
								<span className='input-group-text bg-secondary'>
									<FontAwesomeIcon icon='user' />
								</span>
								<input
									type='text'
									className='form-control'
									name='username'
									onChange={handleOnChange}
									autoComplete='off'
								/>
							</div>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Email</label>
							<div className='input-group col-sm-10'>
								<span className='input-group-text bg-secondary'>
									<FontAwesomeIcon icon='envelope' />
								</span>
								<input
									type='email'
									className='form-control'
									name='email'
									aria-describedby='emailHelp'
									onChange={handleOnChange}
								/>
							</div>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Contraseña</label>
							<div className='input-group col-sm-10'>
								<span className='input-group-text bg-secondary'>
									<FontAwesomeIcon icon='key' />
								</span>
								<input
									type='password'
									className='form-control'
									name='password'
									onChange={handleOnChange}
									autoComplete='off'
								/>
							</div>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Confirmar contraseña</label>
							<div className=' input-group col-sm-10'>
								<span className='input-group-text bg-secondary '>
									<FontAwesomeIcon icon='key' />
								</span>
								<input
									type='password'
									className='form-control'
									name='password2'
									onChange={handleOnChange}
								/>
							</div>
						</div>
					</article>
					<div className='form-row text-center'>
						<div className='d-grid gap-2 col-8 mx-auto'>
							<button
								type='submit'
								className='btn btn-primary btn-md btn-block'
							>
								Crear Usuario
							</button>
						</div>
					</div>
				</article>
			</form>
		</>
	);
};
export default Register;

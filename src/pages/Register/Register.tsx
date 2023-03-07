import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { selectAuth } from '@/store/slyces/auth.slyce';
import { closeModalAuth } from '@/store/slyces/modalAuth.slyce';
import { RegisterProps } from '@pages/Register/Register.interfaces';

const Register: React.FC<RegisterProps> = ({
	onSubmit,
	onChange,
}: RegisterProps) => {
	const auth = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (auth.isAuthenticate) {
			dispatch(closeModalAuth());
		}
	}, [auth.isAuthenticate, dispatch]);

	return (
		<>
			<form className='container' onSubmit={onSubmit}>
				<article className='card border-0'>
					<h1 className='card-title text-center mt-4'>Crear Cuenta</h1>
					{auth.error !== null && (
						<div className='alert alert-danger text-center' role='alert'>
							{auth.error}
						</div>
					)}
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
									onChange={onChange}
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
									onChange={onChange}
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
									onChange={onChange}
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
									onChange={onChange}
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

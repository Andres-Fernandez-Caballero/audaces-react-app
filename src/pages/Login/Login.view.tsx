import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { login, selectAuth } from '@/store/slyces/auth.slyce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDtoLogin } from '@pages/Login/useDtoLogin.hook';
import React from 'react';
import { closeModalAuth } from '@slyces/modalAuth.slyce';

const LoginView: React.FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);
	const { resetLogin, dtoLogin, setUserName, setPassword } = useDtoLogin();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(login(dtoLogin))
			.then(() => {
				dispatch(closeModalAuth());
			})
			.catch(() => {
				//  handle error
			})
			.finally(() => {
				resetLogin();
			});
	};

	return (
		<form className='container' onSubmit={handleSubmit}>
			<div className='card border-0'>
				<h1 className='card-title text-center mt-4'>Iniciar Sesion</h1>
				{auth.error !== null && (
					<div className='alert alert-danger text-center' role='alert'>
						{auth.error}
					</div>
				)}
				<section className='card-body py-md-4'>
					<div className='mb-3'>
						<label className='form-label'>Nombre de usuario o Email</label>
						<div className='input-group col-sm-10'>
							<span className='input-group-text bg-secondary' id='basic-addon1'>
								<FontAwesomeIcon icon='user' />
							</span>
							<input
								type='text'
								name='username'
								onChange={e => {
									setUserName(e.target.value);
								}}
								placeholder='nombre de usuario'
								className='form-control'
							/>
						</div>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Contraseña</label>
						<div className=' input-group col-sm-10'>
							<span
								className='input-group-text bg-secondary '
								id='basic-addon1'
							>
								<FontAwesomeIcon icon='key' />
							</span>
							<input
								type='password'
								className='form-control'
								name='password'
								onChange={e => {
									setPassword(e.target.value);
								}}
								placeholder='contraseña'
							/>
						</div>
					</div>

					<div className='mb-3'>
						<label className='form-label'>
							<Link to='https://www.google.com/'> Olvido su Contraseña</Link>
						</label>
					</div>
				</section>
				<div className='form-row text-center'>
					<div className='d-grid gap-2 col-6 mx-auto mb-4'>
						<button type='submit' className='btn btn-primary btn-md btn-block'>
							Ingresar
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginView;

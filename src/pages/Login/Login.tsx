import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { IAuthLogin } from '@/interfaces/IAuth';
import { login, selectAuth } from '@/store/slyces/auth.slyce';
import { closeModalAuth } from '@/store/slyces/modalAuth.slyce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FunctionComponent = () => {
	const defaultLogin: IAuthLogin = {
		username: '',
		password: '',
	};

	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);

	const [dtoLogin, setDtoLogin] = useState(defaultLogin);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.table(dtoLogin);
		dispatch(login(dtoLogin));
		dispatch(closeModalAuth());
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setDtoLogin({
			...dtoLogin,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<p>estado User: {auth.user?.username}</p>
			<form className='container' onSubmit={handleSubmit}>
				<div className='card border-0'>
					<h1 className='card-title text-center mt-4'>Iniciar Sesion</h1>
					<section className='card-body py-md-4'>
						<div className='mb-3'>
							<label className='form-label'>Nombre de usuario o Email</label>
							<div className='input-group col-sm-10'>
								<span
									className='input-group-text bg-secondary'
									id='basic-addon1'
								>
									<FontAwesomeIcon icon='user' />
								</span>
								<input
									type='text'
									name='username'
									onChange={handleChange}
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
									onChange={handleChange}
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
							<button
								type='submit'
								className='btn btn-primary btn-md btn-block'
							>
								Ingresar
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Login;

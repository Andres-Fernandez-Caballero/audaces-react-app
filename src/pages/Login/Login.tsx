import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Login: React.FunctionComponent = () => {
	return (
		<>
			<form className='container h-100 d-flex justify-content-center align-self-center mt-5'>
				<section className='container h-100 border border-secundary'>
					<div className='d-grid gap-2 col-10 mx-auto'>
						<h1 className='d-flex justify-content-center text-center mt-4'>
							Iniciar Sesion
						</h1>
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
									type='email'
									className='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
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
									id='exampleInputPassword1'
								/>
							</div>
						</div>

						<div className='mb-3'>
							<label className='form-label'>
								<Link to='https://www.google.com/'> Olvido su Contraseña</Link>
							</label>
						</div>
						<div className='form-row text-center'>
							<div className='d-grid gap-2 col-6 mx-auto mb-4'>
								<button
									type='submit'
									className='btn btn-primary btn-lg btn-block'
								>
									Ingresar
								</button>
							</div>
						</div>
					</div>
				</section>
			</form>
		</>
	);
};

export default Login;

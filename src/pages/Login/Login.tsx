import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.scss';
const Login: React.FunctionComponent = () => {
	return (
		<>
			<section className='container-fluid h-100 d-flex justify-content-center align-items-center'>
				<form>
					<section className='container h-100 border border-secundary'>
						<div className='row align-items-center'>
							<h1 className='d-flex justify-content-center text-center mt-4'>
								Iniciar Sesion
							</h1>
						</div>
						<div className='row g3 p-2 m-4'>
							<div className='mb-3'>
								<label className='form-label'>Nombre de usuario o Email</label>
								<div className='col-sm-12'>
									<input
										type='email'
										className={styles.formControl}
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
								</div>
							</div>
							<div className='mb-3'>
								<label className='form-label'>Contraseña</label>

								<div className='col-sm-12'>
									<input
										type='password'
										className={styles.formControl}
										id='exampleInputPassword1'
									/>
								</div>
							</div>

							<div className='mb-3'>
								<label className='form-label'>
									<Link to='https://www.google.com/'>
										{' '}
										Olvido su Contraseña
									</Link>
								</label>
							</div>
						</div>
						<div className='row align-items-center'>
							<div className='d-flex justify-content-center mb-2'>
								<button
									type='submit'
									className='btn btn-primary'
									style={{ width: '35%' }}
								>
									Ingresar
								</button>
							</div>
						</div>
					</section>
				</form>
			</section>
		</>
	);
};

export default Login;

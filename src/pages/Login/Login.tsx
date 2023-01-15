import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Login: React.FunctionComponent = () => {
	return (
		<>
			<form className='container'>
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

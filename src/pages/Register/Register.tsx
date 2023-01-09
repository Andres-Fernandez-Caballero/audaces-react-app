import { URL } from '@/constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
	return (
		<>
			<form className='container'>
				<article className='card border-0'>
					<h1 className='card-title text-center mt-4'>Crear Cuenta</h1>
					<article className='card-body py-md-4'>
						<div className='mb-3'>
							<label className='form-label'>Nombre de usuario</label>
							<div className='input-group col-sm-10'>
								<span
									className='input-group-text bg-secondary'
									id='basic-addon1'
								>
									<FontAwesomeIcon icon='user' />
								</span>
								<input
									type='text'
									className='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
								/>
							</div>
						</div>
						<div className='mb-3'>
							<label className='form-label'>Email</label>
							<div className='input-group col-sm-10'>
								<span
									className='input-group-text bg-secondary'
									id='basic-addon1'
								>
									<FontAwesomeIcon icon='envelope' />
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
							<div className='input-group col-sm-10'>
								<span
									className='input-group-text bg-secondary'
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
							<label className='form-label'>Confirmar contraseña</label>
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
					</article>
					<div className='form-row text-center'>
						<div className='d-grid gap-2 col-8 mx-auto'>
							<Link
								to={URL.HOME}
								type='submit'
								className='btn btn-primary btn-md btn-block'
							>
								Crear Usuario
							</Link>
						</div>
					</div>
				</article>
			</form>
		</>
	);
};
export default Register;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register: React.FC = () => {
	return (
		<>
			<section>
				<form className='container h-75 d-flex justify-content-center mt-5 mb-5'>
					<section className='container h-75 border border-secundary'>
						<div className='d-grid gap-2 col-10 mx-auto'>
							<h1 className='d-flex justify-content-center text-center mt-4'>
								Crear Cuenta
							</h1>
							<div className='mb-3'>
								<label className='form-label'>Nombre de usuario</label>
								<div className='input-group col-sm-12'>
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
							<div className='form-row text-center'>
								<div className='d-grid gap-2 col-6 mx-auto'>
									<button
										type='submit'
										className='btn btn-primary border border-secundary'
										style={{ marginTop: '1.5rem' }}
									>
										Crear Usuario
									</button>
									<button
										type='submit'
										className='btn btn-secondary border border-primary'
										style={{ marginBottom: '0.5rem' }}
									>
										¿Ya tiene usuario? Inicie Sesion
									</button>
								</div>
							</div>
						</div>
					</section>
				</form>
			</section>
		</>
	);
};
export default Register;

const ProductSelect: React.FC = () => {
	return (
		<div className='card border-2 border-secondary d-flex justify-content-center'>
			<div className='card-body'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-2'>
							<img
								src='https://assets.adidas.com/images/w_600,f_auto,q_auto/110ca7ba096d4bd2a858ae7701108600_9366/Short_Titular_Argentina_22_Negro_HF1494_01_laydown.jpg'
								className='w-100 d-block'
								alt='...'
							/>
						</div>
						<div className='col-md-3 '>
							<div className='container'>
								<div className='row'>Short Adidas</div>
								<div className='row'>Color: Negro</div>
								<div className='row'>Talle: M</div>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								className='btn-group'
								role='group'
								aria-label='Basic example'
							>
								<button
									type='button'
									className='btn btn-outline-primary rounded-circle'
									style={{
										height: '1.5rem',
										width: '1.5rem',
										textAlign: 'center',
										lineHeight: '0px',
										padding: '0.5rem 0',
									}}
								>
									{' '}
									+{' '}
								</button>
								<div
									className='text-center p-1'
									style={{
										fontSize: '1.1rem',
										fontWeight: 'bold',
										lineHeight: '0px',
									}}
								>
									{' '}
									1{' '}
								</div>
								<button
									type='button'
									className='btn btn-outline-primary rounded-circle'
									style={{
										height: '1.5rem',
										width: '1.5rem',
										textAlign: 'center',
										lineHeight: '0px',
										padding: '0.5rem 0',
									}}
								>
									{' '}
									-{' '}
								</button>
							</div>
						</div>
						<div className='col-md-2'>$4999,99</div>
						<div className='col-md-2'>
							<button className='btn btn-secondary'>Eliminar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductSelect;

export const CartResume: React.FC = () => {
	return (
		<div className='card border border-2 border-secondary w-100'>
			<div className='card-body'>
				<h5 className='card-title'>Total Productos: $</h5>
				<p className='card-text'>
					<div className='mb-3 flex-nowrap'>
						<label
							htmlFor='exampleFormControlInput1'
							className='form-label form-control-sm'
						>
							Forma de pago
						</label>
						<select
							className='form-select form-select-sm'
							aria-label='Default select example'
						>
							<option selected>Envio a sucursal mas cercana</option>
							<option value='1'>Efectivo</option>
							<option value='2'>Retiro en el local</option>
						</select>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label '>
							Codigo Postal
						</label>
						<input
							type='text'
							className='form-control form-control-sm'
							placeholder='Codigo Postal'
							aria-label='Username'
							aria-describedby='basic-addon1'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Costo envio.......$
						</label>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Total..... $
						</label>
					</div>

					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Forma de pago
						</label>
						<select
							className='form-select form-select-sm'
							aria-label='Default select example'
						>
							<option selected>Efectivo</option>
							<option value='1'>Tarjeta</option>
							<option value='2'>Efectivo</option>
						</select>
					</div>
				</p>
				<button className='btn btn-primary justify-content-center d-flex'>
					Procesar Pago
				</button>
			</div>
		</div>
	);
};

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '@interfaces/IProduct';
import tshirt from '@assets/imgs/remera_frente.png';
import styles from './Detail.module.scss';
import { useDispatch } from 'react-redux';
import { openModalAuth } from '@slyces/modalAuth.slyce';
import { productById } from '@/interceptors/product.interceptor';

const Detail: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	let initProduct: undefined | IProduct;
	const [product, setProduct] = useState(initProduct);

	const { id } = useParams();

	useEffect(() => {
		if (id !== undefined) {
			productById(id)
				.then(productFind => {
					if (productFind !== null && productFind !== undefined)
						setProduct(productFind);
				})
				.catch(err => {
					console.log(err);
				});
		}
	}, []);

	return (
		<div className='container'>
			<main className='row'>
				<aside className='col-md-8'>
					<figure className='d-flex justify-content-center'>
						<img className={styles.image} src={tshirt} alt='tshirt' />
					</figure>
				</aside>
				<section className='col-md-4'>
					{product !== undefined && (
						<>
							<article>
								<h2>{product.title.titulo}</h2>
								<p
									className='badge text-bg-primary'
									style={{ fontSize: '1.1rem' }}
								>
									<span>$</span>
									{product.price}
								</p>
								<p>Componente selector talle/color</p>

								<button
									className='btn btn-info'
									onClick={() => {
										dispatch(openModalAuth());
									}}
								>
									Agregar al carrito
								</button>
							</article>
							<article className='accordion my-4' id='preguntas-frecuentes'>
								<div className='accordion-item'>
									<h3
										className='accordion-header'
										id='preguntas-frecuentes-titulo'
									>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#preguntas-frecuentes-contenido'
											aria-expanded='true'
											aria-controls='preguntas-frecuentes-contenido'
										>
											Preguntas Frecuentes
										</button>
									</h3>
									<div
										id='preguntas-frecuentes-contenido'
										className='accordion-collapse collapse show'
										aria-labelledby='preguntas-frecuentes-titulo'
										data-bs-parent='#preguntas-frecuentes'
									>
										<div className='accordion-body'>
											<p>{product.title.preguntas}</p>
										</div>
									</div>
								</div>
							</article>
						</>
					)}
				</section>
			</main>
		</div>
	);
};

export default Detail;

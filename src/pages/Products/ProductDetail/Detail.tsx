import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '@interfaces/IProduct';
import api from '@tests/api/products.mock.json';
import tshirt from '@assets/imgs/remera_frente.png';

const Detail: React.FunctionComponent = () => {
	const initProduct: IProduct = {
		title: {
			titulo: '',
			preguntas: '',
			descripcion: '',
			info_tienda: '',
		},
		code: '',
		name: '',
		description: '',
		sex: '',
		guard: '',
		cloth: '',
		design: '',
		size: '',
		weight: 0,
		color_details: '',
		missing: null,
		price: 0,
		precio_mayorista: 0,
		oferta: false,
		bestof: false,
		visible: false,
		tabla_talles: '',
		discount: 0,
		categories: [],
	};
	const [product, setProduct] = useState(initProduct);

	const { id } = useParams();

	useEffect(() => {
		const productFind = api.results.find(
			(product: IProduct) => product.id === Number(id)
		);
		if (productFind !== null && productFind !== undefined) {
			setProduct(productFind);
		}
	});

	return (
		<div className='container'>
			<main className='row'>
				<aside className='col-md-8'>
					<img src={tshirt} alt='tshirt' />
				</aside>
				<section className='col-md-4'>
					<article>
						<h2>{product.title.titulo}</h2>
						<p>
							<span>$</span>
							{product.price}
						</p>
						<p>Componente selector talle/color</p>

						<button className='btn btn-info'>Agregar al carrito</button>
					</article>
					<article className='accordion my-4' id='preguntas-frecuentes'>
						<div className='accordion-item'>
							<h3 className='accordion-header' id='preguntas-frecuentes-titulo'>
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
				</section>
			</main>
		</div>
	);
};

export default Detail;

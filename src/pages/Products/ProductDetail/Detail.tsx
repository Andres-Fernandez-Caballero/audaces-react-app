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
		<>
			<section>
				<h1>Detail {product.title.titulo}</h1>
				<img src={tshirt} alt={product.title.titulo} />
				<section>
					<h2>Descripcion</h2>
					<p>{product.description}</p>
				</section>
			</section>
		</>
	);
};

export default Detail;

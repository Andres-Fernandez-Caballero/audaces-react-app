import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModalAuth } from '@store/slices/modalAuth.slyce';
import { getProductById } from '@/service/products';
import Product from '@/models/product';
import { URL } from '@constants/routes';
import { loadingOff, loadingOn } from '@slices/loading.slyce';
import { toast } from 'react-toastify';
import VariantSelector from '@pages/Products/ProductDetail/VariantSelector';
import SubProduct from '@/models/subProduct';
import { useProductDetail } from '@pages/Products/ProductDetail/ProductDetail.hooks';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Detail: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState<Product>();
	const { chosenSubProduct, changeChosenSubProduct } = useProductDetail();
	const { id } = useParams();

	useEffect(() => {
		if (id === undefined) {
			redirect(URL.PRODUCTS);
			return;
		}
		dispatch(loadingOn());
		getProductById(id)
			.then(productFind => {
				if (productFind !== null && productFind !== undefined) {
					setProduct(productFind);
					changeChosenSubProduct(new SubProduct(productFind.firstSubProduct));
				}
			})
			.catch(err => {
				console.log(err);
				toast.error('Error al cargar el producto');
			})
			.finally(() => {
				dispatch(loadingOff());
			});
	}, []);

	return (
		<div className='container'>
			<main className='row'>
				<aside className='col-md-8'>
					{product !== undefined && (
						<Carousel showArrows={true}>
							<figure>
								<img
									src={chosenSubProduct?.frontImage}
									alt={product.title.titulo}
								/>
								<figcaption>{product?.title.titulo}</figcaption>
							</figure>
							<figure>
								<img
									src={chosenSubProduct?.backImage}
									alt={product?.title.titulo}
								/>
								<figcaption>{product?.title.titulo}</figcaption>
							</figure>
						</Carousel>
					)}
				</aside>
				<section className='col-md-4'>
					{product !== undefined && (
						<>
							<article>
								<h2>{product.title.titulo}</h2>
								<div className='d-flex justify-content-between	'>
									<p
										className='badge text-bg-primary'
										style={{ fontSize: '1.1rem' }}
									>
										<span>$</span>
										{product.price}
									</p>
									<button
										className='btn btn-info'
										onClick={() => {
											dispatch(openModalAuth());
										}}
									>
										Agregar al carrito
									</button>
								</div>
								<VariantSelector
									changeChosenSubProduct={changeChosenSubProduct}
									chosenSubProduct={chosenSubProduct}
									subProducts={product.subproducto.map(
										sp => new SubProduct(sp)
									)}
								/>
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

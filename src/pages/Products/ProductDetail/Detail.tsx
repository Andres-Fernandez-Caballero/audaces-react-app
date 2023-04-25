import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductById } from '@/service/products';
import { URL } from '@constants/routes';
import { loadingOff, loadingOn } from '@slices/loading.slyce';
import { toast } from 'react-toastify';
import VariantSelector from '@pages/Products/ProductDetail/VariantSelector';
import SubProduct from '@/models/subProduct';
import { useProductDetail } from '@pages/Products/ProductDetail/ProductDetail.hooks';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FAQ } from '@pages/Products/ProductDetail/FAQ';
import { addToCart } from '@slices/cart/cart.slyce';

const Detail: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		chosenProduct,
		setChosenProduct,
		chosenSubProduct,
		changeChosenSubProduct,
		setChosenSize,
		chosenSize,
		generateItemCart,
		getSize,
	} = useProductDetail();
	const { id } = useParams();

	useEffect(() => {
		if (id === undefined) {
			navigate(URL.PRODUCTS);
			return;
		}
		dispatch(loadingOn());
		getProductById(id)
			.then(productFind => {
				if (productFind !== null && productFind !== undefined) {
					setChosenProduct(productFind);
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
					{chosenProduct !== undefined && (
						<Carousel showArrows={true}>
							<figure>
								<img
									src={chosenSubProduct?.frontImage}
									alt={chosenProduct.title.titulo}
								/>
								<figcaption>{chosenProduct.title.titulo}</figcaption>
							</figure>
							<figure>
								<img
									src={chosenSubProduct?.backImage}
									alt={chosenProduct.title.titulo}
								/>
								<figcaption>{chosenProduct.title.titulo}</figcaption>
							</figure>
						</Carousel>
					)}
				</aside>
				<section className='col-md-4'>
					{chosenProduct !== undefined && (
						<>
							<article>
								<h2>{chosenProduct.title.titulo}</h2>
								<div className='d-flex justify-content-between	'>
									<p
										className='badge text-bg-primary'
										style={{ fontSize: '1.1rem' }}
									>
										<span>$</span>
										{chosenProduct.price}
									</p>
									<button
										className='btn btn-info'
										onClick={() => {
											try {
												dispatch(addToCart(generateItemCart()));
												toast.success('Producto agregado al carrito 👍');
											} catch (err) {
												toast.error('Error al agregar al carrito');
												console.log(err);
											}
										}}
									>
										Agregar al carrito
									</button>
								</div>
								<VariantSelector
									chosenSize={chosenSize}
									setChosenSize={setChosenSize}
									getSize={getSize}
									changeChosenSubProduct={changeChosenSubProduct}
									chosenSubProduct={chosenSubProduct}
									subProducts={chosenProduct.subproducto.map(
										sp => new SubProduct(sp)
									)}
								/>
							</article>
							<article className='accordion my-4' id='preguntas-frecuentes'>
								<FAQ questions={chosenProduct.title.preguntas} />
							</article>
						</>
					)}
				</section>
			</main>
		</div>
	);
};

export default Detail;

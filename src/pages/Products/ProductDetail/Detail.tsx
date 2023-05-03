import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useAppDispatch } from '@hooks/redux..hook';
import { addItemToCart } from '@slices/cart/cart.slyce';

const Detail: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
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

	const handleAddToCart = (): void => {
		const toastAction = toast.loading('Agregando al carrito...');

		try {
			const itemCart = generateItemCart();
			dispatch(addItemToCart(itemCart))
				.then(() => {
					toast.update(toastAction, {
						render: 'Producto agregado al carrito',
						isLoading: false,
						autoClose: 2000,
						type: 'success',
					});
				})
				.catch(e => {
					toast.update(toastAction, {
						render: e.message,
						isLoading: false,
						autoClose: 2000,
						type: 'error',
						closeButton: true,
					});
				});
		} catch (e: unknown) {
			const error = e as Error;
			toast.update(toastAction, {
				render: error.message,
				isLoading: false,
				autoClose: 2000,
				closeButton: true,
				type: 'error',
			});
		}
	};

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

									<button className='btn btn-info' onClick={handleAddToCart}>
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

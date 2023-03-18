import { FC, ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '@constants/routes';
import { IProduct } from '@interfaces/IProduct';
import tshirt from '@assets/imgs/remera_frente.png';
import { getAllProducts } from '@/service/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '@slices/cart.slyce';
import { toast } from 'react-toastify';
import { getCartItemsFromLocalStorage } from '@/utils/cartItemsStorage';

const List: FC = (): ReactElement => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([] as IProduct[]);
	useEffect(() => {
		console.log('local storage', getCartItemsFromLocalStorage());
		getAllProducts()
			.then(apiProducts => {
				setProducts(apiProducts);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<section className='container h-100 d-flex justify-content-center align-items-center'>
				<ul className='row row-cols-1 row-cols-md-2 g-4'>
					{products.map((product: IProduct) => (
						<div key={product.id} className='col-12 col-6 col-lg-3 mb-3'>
							<div
								className='card border border-secondary'
								style={{
									width: '100%',
									height: 'auto',
								}}
							>
								<Link
									to={
										// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
										`${URL.PRODUCTS_DETAIL}/${product.id}`
									}
								>
									<img
										className='card-img-top'
										src={
											product.subproducto[0].images.length > 0 &&
											product.subproducto[0].images[1].image !== undefined
												? product.subproducto[0].images[1].image
												: tshirt
										}
										alt={product.title.titulo}
									/>
								</Link>
								<div className='card-body'>
									<h4
										className='card-title'
										style={{
											fontSize: '1.2rem',
											fontWeight: 'bolder',
											display: 'inline-block',
											alignItems: 'initial',
										}}
									>
										{product.title.titulo}
									</h4>
									<p
										className='text-info'
										style={{
											display: 'inline-block',
											justifyItems: 'flex-end',
											padding: '0.5rem',
										}}
									>
										<span style={{ fontWeight: 'bolder', fontSize: '1rem' }}>
											$
										</span>
										{product.price}
									</p>
									<button
										className='btn btn-info'
										onClick={() => {
											dispatch(addToCart(product));
											toast.success('Producto agregado al carrito', {
												position: 'top-right',
												autoClose: 2000,
											});
										}}
									>
										Agregar al Carrito
									</button>
								</div>
							</div>
						</div>
					))}
				</ul>
			</section>
		</>
	);
};

export default List;

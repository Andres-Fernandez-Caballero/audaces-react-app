import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '@constants/routes';
import { IProduct } from '@interfaces/IProduct';
import JumboBanner from '@components/layouts/JumboBanner';
import banner from '@assets/imgs/banners/bermuda.banner.png';
import api from '@tests/api/products.mock.json';
import tshirt from '@assets/imgs/remera_frente.png';

const List: React.FunctionComponent = () => {
	const [products, setProducts] = useState([] as IProduct[]);
	useEffect(() => {
		const apiProducts: IProduct[] = api.results;
		setProducts(apiProducts);
	}, []);

	return (
		<>
			<JumboBanner src={banner} />
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
										src={tshirt}
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

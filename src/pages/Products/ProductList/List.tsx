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
			<section className='card-deck'>
				<ul
					style={{
						display: 'grid',
						gridTemplateColumns: 'auto auto auto auto auto',
					}}
				>
					{products.map((product: IProduct) => (
						<li key={product.id}>
							<Link
								to={
									// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
									`${URL.PRODUCTS_DETAIL}/${product.id}`
								}
							>
								<img src={tshirt} alt={product.title.titulo} />
							</Link>
							<h3>{product.title.titulo}</h3>
							<p
								style={{
									borderRadius: '10px',
									backgroundColor: 'lightgreen',
									display: 'inline-block',
									padding: '0.5rem',
								}}
							>
								<span style={{ fontWeight: 'bolder', fontSize: '1.1rem' }}>
									$
								</span>
								{product.price}
							</p>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default List;

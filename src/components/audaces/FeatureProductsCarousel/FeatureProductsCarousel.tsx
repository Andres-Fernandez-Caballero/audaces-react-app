import { URL } from '@/constants/routes';
import { IProduct } from '@/interfaces/IProduct';
import { getAllProducts } from '@/service/products';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tshirt from '@assets/imgs/remera_frente.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const FeatureProductsCarousel: React.FunctionComponent = () => {
	const [products, setProducts] = useState([] as IProduct[]);
	useEffect(() => {
		getAllProducts()
			.then(apiProducts => {
				setProducts(apiProducts);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);
	return (
		<section className='container-fluid'>
			<article>
				<h2>Productos Destacados</h2>
			</article>
			<Carousel responsive={responsive}>
				{products.map((product: IProduct) => (
					<div className='carousel-item active' key={product.id}>
						<div
							className='card border border-0'
							style={{
								width: '250px',
								margin: 'auto',
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
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default FeatureProductsCarousel;

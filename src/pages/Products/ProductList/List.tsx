import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '@constants/routes';
import { usePagination } from '@/utils/usePaginator';
import MenuPagination from '@components/layouts/Pagination/MenuPagination';

const List: FC = (): ReactElement => {
	const {
		page,
		hasPreviousPage,
		hasNextPage,
		previousPage,
		nextPage,
		products,
	} = usePagination();

	console.table({ next: hasNextPage(), prev: hasPreviousPage() });

	return (
		<section className='container h-100 d-flex justify-content-center align-items-center'>
			<MenuPagination
				page={page}
				hasNextPage={hasNextPage()}
				hasPreviousPage={hasPreviousPage()}
				nextPage={nextPage}
				previousPage={previousPage}
			/>
			<ul className='row row-cols-1 row-cols-md-2 g-4'>
				{products.map(product => (
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
									src={product.frontImage()}
									alt={product.title.titulo}
								/>
							</Link>
							<article className='card-body'>
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
							</article>
						</div>
					</div>
				))}
			</ul>
		</section>
	);
};

export default List;

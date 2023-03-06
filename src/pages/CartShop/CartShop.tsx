import CardTotal from '@/components/layouts/CardTotal';
import ProductSelect from '@/components/layouts/ProductsSelects';
export const CartShop = (): JSX.Element => {
	return (
		<section className='container-fluid d-flex justify-content-lg-center align-items-lg-center mt-3 '>
			<div className='row row-cols-1 row-cols-md-2 g-4' style={{ order: 2 }}>
				<div className='col-md-8'>
					<ProductSelect />
				</div>
				<div className='col-md-4'>
					<CardTotal />
				</div>
			</div>
		</section>
	);
};

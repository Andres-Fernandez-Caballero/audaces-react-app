import CardTotal from '@/components/layouts/CardTotal';
import ProductSelect from '@/components/layouts/ProductsSelects';

export const CartShop = (): JSX.Element => {
	return (
		<div className='container d-flex align-items-center justify-content-center m-auto'>
			<div className='row row-cols-1 row-cols-md-2 g-4'>
				<div className='col'>
					<ProductSelect />
				</div>
				<div className='col'>
					<CardTotal />
				</div>
			</div>
		</div>
	);
};

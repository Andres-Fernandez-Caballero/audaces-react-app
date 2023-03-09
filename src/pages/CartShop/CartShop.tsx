import { CartItem } from '@pages/CartShop/CartItem';
import { CartResume } from '@pages/CartShop/CartResume';

export const CartShop = (): JSX.Element => {
	return (
		<div className='container d-flex align-items-center justify-content-center m-auto'>
			<div className='row row-cols-1 row-cols-md-2 g-4'>
				<div className='col'>
					<CartItem />
				</div>
				<div className='col'>
					<CartResume />
				</div>
			</div>
		</div>
	);
};

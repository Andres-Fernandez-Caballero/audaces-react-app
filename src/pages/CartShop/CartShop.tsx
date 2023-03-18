import { CartItem } from '@pages/CartShop/CartItem/CartItem';
import { CartResume } from '@pages/CartShop/CartResume/CartResume';
import { useAppSelector } from '@hooks/redux..hook';
import { selectCart } from '@slices/cart.slyce';
import { ICartItem } from '@interfaces/ICartItem';

export const CartShop = (): JSX.Element => {
	const { cart } = useAppSelector(selectCart);

	return (
		<div className='container d-flex align-items-center justify-content-center m-auto'>
			<div className='row row-cols-1 row-cols-md-2 g-4'>
				<div className=''>
					{cart.map((cartItem: ICartItem) => (
						<CartItem key={cartItem.product.id} item={cartItem} />
					))}
				</div>
				<div className='col'>
					<CartResume />
				</div>
			</div>
		</div>
	);
};

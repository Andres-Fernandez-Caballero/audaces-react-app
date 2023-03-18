import { FC, ReactElement } from 'react';
import { useAppSelector } from '@hooks/redux..hook';
import { selectCart } from '@slices/cart.slyce';
import { CartShop } from '@pages/CartShop/CartShop';

const ComponentCartPage: FC = (): ReactElement => {
	const { cart } = useAppSelector(selectCart);
	return (
		<>
			{cart.length > 0 ? (
				<CartShop />
			) : (
				<div>
					<h2>No tienes productos en el carrito todabia</h2>
				</div>
			)}
		</>
	);
};
export default ComponentCartPage;

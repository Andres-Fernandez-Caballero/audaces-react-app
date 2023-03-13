import { CartItemImageProps } from '@pages/CartShop/CartShop.interfaces';
import { FC } from 'react';

export const CartItemImage: FC<CartItemImageProps> = ({
	image,
}: CartItemImageProps) => (
	<img
		className={'img-fluid'}
		src={image}
		alt='imagen de una prenda de vestir'
	/>
);

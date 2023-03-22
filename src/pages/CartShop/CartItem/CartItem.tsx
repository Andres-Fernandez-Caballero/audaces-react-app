import { CartItemCounter } from '@pages/CartShop/CartItem/CartItemCounter';
import { FC, ReactElement } from 'react';
import { CartItemDropItemButton } from '@pages/CartShop/CartItem/CartItemDropItemButton';
import { useCartItemAmountAndTotalPrice } from '@pages/CartShop/CartShop.hooks';
import styles from '@pages/CartShop/CartItem/CartItem.module.scss';
import { CartItemProps } from '@pages/CartShop/CartShop.interfaces';
import { removeFromCart } from '@slices/cart.slyce';
import { useAppDispatch } from '@hooks/redux..hook';
import { toast } from 'react-toastify';

export const CartItem: FC<CartItemProps> = ({
	item,
}: CartItemProps): ReactElement => {
	const { amount, handleSubtract, handleAdd, getTotalPrice } =
		useCartItemAmountAndTotalPrice(item.product.price);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.container}>
			<h2 className={styles.productName}>
				<strong>{item.product.name}</strong>
			</h2>
			<figure className={styles.thumbnail}>
				<img
					className={styles.thumbnail__image}
					src={
						item.product.subproducto.length > 0
							? item.product.subproducto[0].images[1].image
							: 'default'
					}
					alt='imagen de una prenda de vestir'
				/>
			</figure>
			<article className={styles.amountMenu}>
				<CartItemCounter
					amount={amount}
					onSubtract={handleSubtract}
					onAdd={handleAdd}
				/>
			</article>
			<header className={styles.totalPrice}>
				<h2 className={styles.totalPrice__text}>
					$<span>{getTotalPrice()}</span>
				</h2>
			</header>
			<menu className={styles.dropMenu}>
				<CartItemDropItemButton
					onClick={() => {
						dispatch(removeFromCart(item));
						toast.info('producto eliminado del carrito ');
					}}
				/>
			</menu>
			<footer className={styles.details}>
				<p>
					<strong>Color:</strong> Negro
				</p>
				<p>
					<strong>Talle:</strong> M
				</p>
			</footer>
		</div>
	);
};

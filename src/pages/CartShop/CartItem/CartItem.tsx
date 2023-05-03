import { CartItemCounter } from '@pages/CartShop/CartItem/CartItemCounter';
import { FC, ReactElement } from 'react';
import { CartItemDropItemButton } from '@pages/CartShop/CartItem/CartItemDropItemButton';
import styles from '@pages/CartShop/CartItem/CartItem.module.scss';
import { CartItemProps } from '@pages/CartShop/CartShop.interfaces';
import { toast } from 'react-toastify';

export const CartItem: FC<CartItemProps> = ({
	item,
}: CartItemProps): ReactElement => {
	const handleSubtract = (): void => {
		// ADD FEATURE
		// dispatch(
		// 	updateQuantityFromCartItem({
		// 		cartItem: item,
		// 		quantity: -1,
		// 	})
		// );
	};

	const handleAdd = (): void => {
		//  ADD FEATURE
		// dispatch(
		// 	updateQuantityFromCartItem({
		// 		cartItem: item,
		// 		quantity: 1,
		// 	})
		// );
	};

	const getTotalPrice = (): number => {
		return item.price * item.quantity;
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.productName}>
				<strong>{item.name}</strong>
			</h2>
			<figure className={styles.thumbnail}>
				<img
					className={styles.thumbnail__image}
					src={item.image}
					alt={item.name}
				/>
			</figure>
			<article className={styles.amountMenu}>
				<CartItemCounter
					amount={item.quantity}
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
						// dispatch(removeFromCart(item));
						toast.info('producto eliminado del carrito ');
					}}
				/>
			</menu>
			<footer className={styles.details}>
				<p>
					<strong>Color:</strong> {item.color}
				</p>
				<p>
					<strong>Talle:</strong> {item.size}
				</p>
			</footer>
		</div>
	);
};

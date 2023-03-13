import { CartItemCounter } from '@pages/CartShop/CartItem/CartItemCounter';
import { FC, ReactElement } from 'react';
import { CartItemImage } from '@pages/CartShop/CartItem/CartItemImage';
import { CartItemDropItemButton } from '@pages/CartShop/CartItem/CartItemDropItemButton';
import {
	useCartItemAmount,
	useCartItemTotal,
} from '@pages/CartShop/CartShop.hooks';
import styles from '@pages/CartShop/CartItem/CartItem.module.scss';

export const CartItem: FC = (): ReactElement => {
	const { amount, handleSubtract, handleAdd } = useCartItemAmount();
	const total = 4999.99;
	const totalPrice = useCartItemTotal(amount, total);

	return (
		<div className='card border-2 border-secondary d-flex justify-content-center'>
			<div className={/* 'card-body' */ styles.container}>
				<figure className={styles.image}>
					<CartItemImage
						image={
							'https://assets.adidas.com/images/w_600,f_auto,q_auto/110ca7ba096d4bd2a858ae7701108600_9366/Short_Titular_Argentina_22_Negro_HF1494_01_laydown.jpg'
						}
					/>
				</figure>
				<article className={styles.amount}>
					<CartItemCounter
						amount={amount}
						onSubtract={handleSubtract}
						onAdd={handleAdd}
					/>
					<header>
						<h2>
							$<span>{totalPrice}</span>
						</h2>
					</header>
				</article>
				<menu className={styles.menu}>
					<CartItemDropItemButton />
				</menu>
				<footer className={styles.details}>
					<p>
						<strong>Short Adidas</strong>
					</p>
					<p>
						<strong>Color:</strong> Negro
					</p>
					<p>
						<strong>Talle:</strong> M
					</p>
				</footer>
			</div>
		</div>
	);
};

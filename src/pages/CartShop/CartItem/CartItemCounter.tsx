import { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartItemCountProps } from '@pages/CartShop/CartShop.interfaces';
import styles from './CartItem.module.scss';

export const CartItemCounter: FC<CartItemCountProps> = ({
	amount,
	onSubtract,
	onAdd,
}: CartItemCountProps): ReactElement => {
	return (
		<nav className={styles.amountMenu__container}>
			<button
				className={styles.amountMenu__container__rounded__button}
				onClick={onSubtract}
			>
				<FontAwesomeIcon icon='minus' />
			</button>
			<p className={styles.amountMenu__container__amount}>{amount}</p>
			<button
				className={styles.amountMenu__container__rounded__button}
				onClick={onAdd}
			>
				<FontAwesomeIcon icon='plus' />
			</button>
		</nav>
	);
};

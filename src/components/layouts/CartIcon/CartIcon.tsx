import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { URL } from '@constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '@hooks/redux..hook';
import { selectCart } from '@slices/cart.slyce';
import styles from './CartIcon.module.scss';

export const CartIcon = (): ReactElement => {
	const { cart } = useAppSelector(selectCart);
	return (
		<nav className={styles.cart}>
			<NavLink to={URL.CART} className={styles.cart__icon}>
				<FontAwesomeIcon icon='cart-shopping' />
				{cart.length !== 0 ? (
					<span className={styles.cart__counter__badge}>{cart.length}</span>
				) : null}
			</NavLink>
		</nav>
	);
};

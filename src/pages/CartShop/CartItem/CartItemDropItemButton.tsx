import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';

export const CartItemDropItemButton = (): ReactElement => {
	return (
		<>
			<a className={styles.dropMenu__button}>
				<FontAwesomeIcon icon={'trash'} />
			</a>
		</>
	);
};

import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';

export interface CartItemDropItemButtonProps {
	onClick: () => void;
}

export const CartItemDropItemButton = ({
	onClick,
}: CartItemDropItemButtonProps): ReactElement => {
	return (
		<>
			<button className={styles.dropMenu__button} onClick={onClick}>
				<FontAwesomeIcon icon={'trash'} />
			</button>
		</>
	);
};

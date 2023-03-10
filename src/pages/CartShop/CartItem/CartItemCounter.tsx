import { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartItemCountProps } from '@pages/CartShop/CartShop.interfaces';

export const CartItemCounter: FC<CartItemCountProps> = ({
	amount,
	onSubtract,
	onAdd,
}: CartItemCountProps): ReactElement => {
	return (
		<nav className='btn-group'>
			<button style={cartItemCounterStyle.button} onClick={onAdd}>
				<FontAwesomeIcon icon='plus' />
			</button>
			<p style={cartItemCounterStyle.amount}>{amount}</p>
			<button style={cartItemCounterStyle.button} onClick={onSubtract}>
				<FontAwesomeIcon icon='minus' />
			</button>
		</nav>
	);
};

const cartItemCounterStyle = {
	button: {
		display: 'flex',
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: '1.5rem',
		width: '1.5rem',
		padding: '0.5rem',
	},
	amount: {
		fontWeight: 'bold',
		margin: '0 0.5rem',
	},
};

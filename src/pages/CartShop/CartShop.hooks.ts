import { useState } from 'react';
import { CartItemAmountHook } from '@pages/CartShop/CartShop.interfaces';

export const useCartItemAmountAndTotalPrice = (
	productPrice: number
): CartItemAmountHook => {
	const [amount, setAmount] = useState(1);

	const handleAdd = (): void => {
		setAmount(amount + 1);
	};
	const handleSubtract = (): void => {
		if (amount === 1) return;
		setAmount(amount - 1);
	};

	const getTotalPrice = (): number => {
		const DECIMALS = 2;
		return Number((amount * productPrice).toFixed(DECIMALS));
	};

	return { amount, handleAdd, handleSubtract, getTotalPrice };
};

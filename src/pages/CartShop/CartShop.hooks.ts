import { useState } from 'react';
import { CartItemAmountHook } from '@pages/CartShop/CartShop.interfaces';

export const useCartItemAmount = (): CartItemAmountHook => {
	const [amount, setAmount] = useState(1);

	const handleAdd = (): void => {
		setAmount(amount + 1);
	};
	const handleSubtract = (): void => {
		if (amount === 1) return;
		setAmount(amount - 1);
	};

	return { amount, handleAdd, handleSubtract };
};

export const useCartItemTotal = (amount: number, price: number): string => {
	return (amount * price).toFixed(2);
};

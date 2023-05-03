import { ICart } from '@slices/cart/cart.interface';

export interface CartItemAmountHook {
	amount: number;
	handleAdd: () => void;
	handleSubtract: () => void;
	getTotalPrice: () => number;
}

export interface CartItemProps {
	item: ICart;
}

export interface CartItemCountProps {
	amount: number;
	onAdd: () => void;
	onSubtract: () => void;
}

export interface CartItemImageProps {
	image: string;
}

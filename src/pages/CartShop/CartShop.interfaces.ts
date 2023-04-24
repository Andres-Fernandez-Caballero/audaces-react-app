import { ICartItem } from '@interfaces/ICartItem';

export interface CartItemAmountHook {
	amount: number;
	handleAdd: () => void;
	handleSubtract: () => void;
	getTotalPrice: () => number;
}

export interface CartItemProps {
	item: ICartItem;
}

export interface CartItemCountProps {
	amount: number;
	onAdd: () => void;
	onSubtract: () => void;
}

export interface CartItemImageProps {
	image: string;
}

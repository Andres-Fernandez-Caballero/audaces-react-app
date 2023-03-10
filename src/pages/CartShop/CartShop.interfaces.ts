export interface CartItemAmountHook {
	amount: number;
	handleAdd: () => void;
	handleSubtract: () => void;
}

export interface CartItemCountProps {
	amount: number;
	onAdd: () => void;
	onSubtract: () => void;
}

export interface CartItemImageProps {
	image: string;
}

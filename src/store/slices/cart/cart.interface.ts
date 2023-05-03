export interface ICartState {
	cart: ICart[];
	totalAmount: number;
}

export interface ICartModifyResponse {
	message: string;
	quantity?: number;
	product_total?: number;
	cart_length?: number;
	cart_total?: number;
}

export interface ICart {
	title: string;
	size_id: number;
	name: string;
	color: string;
	quantity: number;
	price: number;
	image: string;
	size: string;
	subproduct: number;
	weight: number;
}

export interface ICartItemResponse {
	title: string;
	size_id: number;
	name: string;
	color: string;
	quantity: number;
	price: number;
	image: string;
	size: string;
	subproduct: number;
	weight: number;
}

export interface ICartSubProductRequest {
	subProductId: number;
	size: string;
	quantity?: number;
}

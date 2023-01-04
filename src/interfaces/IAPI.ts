import { IProduct } from './IProduct';

export interface IApiAllProductsResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IProduct[];
}

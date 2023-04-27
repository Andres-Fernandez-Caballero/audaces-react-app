import { useEffect, useState } from 'react';
import { getProducts } from '@interceptors/product.interceptor';
import Product from '@/models/product';
import { useDispatch } from 'react-redux';
import { loadingOff, loadingOn } from '@slices/loading.slyce';

export interface usePaginationProps {
	hasNextPage: () => boolean;
	hasPreviousPage: () => boolean;
	nextPage: () => void;
	previousPage: () => void;
	page: number;
	products: Product[];
}

export const usePagination = (): usePaginationProps => {
	const dispatch = useDispatch();

	const [page, setPage] = useState<number>(1);
	const [products, setProducts] = useState<Product[]>([]);
	const [next, setNext] = useState<string | null>(null);
	const [previous, setPrevious] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			dispatch(loadingOn());
			const response = await getProducts(page);
			const { results, next, previous } = response;
			console.table({ next, previous });

			setProducts(results.map(p => new Product(p)));
			setNext(next);
			setPrevious(previous);
			dispatch(loadingOff());
		};
		fetchProducts()
			.then()
			.catch(e => console.log(e));
	}, [page]);

	function hasNextPage(): boolean {
		return next !== null;
	}

	function hasPreviousPage(): boolean {
		return previous !== null;
	}

	function nextPage(): void {
		if (!hasNextPage()) return;
		setPage(page + 1);
	}

	function previousPage(): void {
		if (!hasPreviousPage()) return;
		setPage(page - 1);
	}

	return {
		hasNextPage,
		hasPreviousPage,
		nextPage,
		previousPage,
		page,
		products,
	};
};

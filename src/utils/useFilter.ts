import Product from '@/models/product';
import { useState } from 'react';

export interface UseFilter {
	filterProducts: Product[];
	searchProducts: (text: string) => void;
}

export const useFilter = (products: Product[]): UseFilter => {
	const [filterProducts, setFiltredProducts] = useState<Product[]>(products);

	function searchProducts(text: string): void {
		if (text === '') setFiltredProducts(products);
		const productsFound = products.filter(p => p.title.titulo.includes(text));
		setFiltredProducts(productsFound);
	}

	return { filterProducts, searchProducts };
};

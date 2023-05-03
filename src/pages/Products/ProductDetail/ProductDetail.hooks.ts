import { useState } from 'react';
import SubProduct from '@/models/subProduct';
import Product from '@/models/product';
import { ICartSubProductRequest } from '@slices/cart/cart.interface';

export interface useProductDetailHook {
	chosenSubProduct: SubProduct | undefined;
	getImages: () => string[];
	getSizes: () => string[];
	chosenSize: string | undefined;
	setChosenSize: (size: string) => void;
	changeChosenSubProduct: (subProduct: SubProduct) => void;
	generateItemCart: () => ICartSubProductRequest;
	chosenProduct: Product | undefined;
	setChosenProduct: (product: Product) => void;
	getSize: () => string | undefined;
}

export const useProductDetail = (): useProductDetailHook => {
	const [chosenProduct, setChosenProduct] = useState<Product>();
	const [chosenSubProduct, setChosenSubProduct] = useState<SubProduct>();
	const [chosenSize, setChosenSize] = useState<string>();
	const getImages = (): string[] => {
		if (chosenSubProduct == null) {
			return [];
		}
		return [chosenSubProduct.frontImage, chosenSubProduct.backImage];
	};
	const getSizes = (): string[] => {
		if (chosenSubProduct == null) {
			return [];
		}
		return chosenSubProduct.talles.map(talle => talle.talle);
	};

	const changeChosenSubProduct = (subProduct: SubProduct): void => {
		setChosenSubProduct(subProduct);
	};

	const getSize = (): string | undefined => {
		if (chosenSubProduct == null) return undefined;
		return chosenSubProduct.talles.map(t => t.talle).includes(chosenSize ?? '')
			? chosenSize
			: undefined;
	};

	const generateItemCart = (): ICartSubProductRequest => {
		if (chosenSubProduct === undefined)
			throw new Error('No subproduct selected');

		if (chosenProduct === undefined) throw new Error('No product selected');

		if (getSize() === undefined) throw new Error('No size selected');

		const itemCart: ICartSubProductRequest = {
			subProductId: chosenSubProduct.id,
			size: getSize() ?? '',
		};
		console.log(itemCart);
		return itemCart;
	};

	return {
		chosenSubProduct,
		setChosenSize,
		chosenSize,
		getImages,
		getSizes,
		changeChosenSubProduct,
		generateItemCart,
		chosenProduct,
		setChosenProduct,
		getSize,
	};
};

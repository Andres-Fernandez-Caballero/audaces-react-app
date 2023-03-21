import { useState } from 'react';
import SubProduct from '@/models/subProduct';

export interface useProductDetailHook {
	chosenSubProduct: SubProduct | undefined;
	getImages: () => string[];
	getSizes: () => string[];
	changeChosenSubProduct: (subProduct: SubProduct) => void;
}

export const useProductDetail = (): useProductDetailHook => {
	const [chosenSubProduct, setChosenSubProduct] = useState<SubProduct>();

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

	return {
		chosenSubProduct,
		getImages,
		getSizes,
		changeChosenSubProduct,
	};
};

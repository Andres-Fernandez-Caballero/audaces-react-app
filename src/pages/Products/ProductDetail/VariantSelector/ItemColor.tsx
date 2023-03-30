import styles from '@pages/Products/ProductDetail/Detail.module.scss';
import SubProduct from '@/models/subProduct';
import { ReactElement } from 'react';

export interface ItemColorProps {
	subProduct: SubProduct;
	chosenSubProduct: SubProduct | undefined;
	onClick: () => void;
}

export const ItemColor = ({
	chosenSubProduct,
	subProduct,
	onClick,
}: ItemColorProps): ReactElement => {
	const setFocusColor = (
		sProduct: SubProduct,
		chosenSProduct: SubProduct | undefined
	): string => {
		if (chosenSProduct === undefined) return 'gray';
		return sProduct.color === chosenSProduct?.color ? 'cornflowerblue' : 'gray';
	};

	return (
		<figure
			key={subProduct.id}
			style={{
				borderColor: setFocusColor(subProduct, chosenSubProduct),
			}}
			onClick={onClick}
			className={styles.container_mosaic__mosaic__item}
		>
			<img
				src={subProduct.frontImage}
				alt={subProduct.color}
				className={styles.container_mosaic__mosaic__item___image}
			/>
		</figure>
	);
};

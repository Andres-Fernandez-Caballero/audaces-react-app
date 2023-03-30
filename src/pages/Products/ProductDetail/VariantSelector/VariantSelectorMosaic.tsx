import { VariantSelectorProps } from '@pages/Products/ProductDetail/VariantSelector/VariantSelector';
import { ReactElement } from 'react';
import styles from '../Detail.module.scss';
import { toast } from 'react-toastify';
import { ItemColor } from '@pages/Products/ProductDetail/VariantSelector/ItemColor';

export const sizes = {
	XXL: 'XXL',
	XL: 'XL',
	L: 'L',
	M: 'M',
	S: 'S',
	XS: 'XS',
};

export const VariantSelectorMosaic = ({
	subProducts,
	changeChosenSubProduct,
	chosenSubProduct,
	setChosenSize,
	chosenSize,
	getSize,
}: VariantSelectorProps): ReactElement => {
	console.log('talle: ', getSize());

	return (
		<section>
			<article>
				<h3>
					Color{' '}
					<span className='badge text-bg-info'>{chosenSubProduct?.color}</span>
				</h3>
				<nav className={styles.container_mosaic}>
					{subProducts.map(subProduct => (
						<ItemColor
							key={subProduct.id}
							subProduct={subProduct}
							chosenSubProduct={chosenSubProduct}
							onClick={() => changeChosenSubProduct(subProduct)}
						/>
					))}
				</nav>
			</article>
			<article>
				<h3>
					Talle <span className='badge bg-info'>{getSize()}</span>
				</h3>
				<nav className={styles.container_mosaic}>
					{Object.keys(sizes).map((size, index) => (
						<div
							style={{
								borderColor: size === chosenSize ? 'cornflowerblue' : 'gray',
								opacity:
									chosenSubProduct?.talles.map(t => t.talle).includes(size) ===
									true
										? 1
										: 0.2,
							}}
							key={index}
							className={styles.container_mosaic__mosaic__item}
							onClick={() => {
								if (
									chosenSubProduct?.talles.map(t => t.talle).includes(size) ===
									false
								) {
									toast.info(
										'No hay talles disponibles prueba con otro color',
										{
											position: 'bottom-right',
											draggable: true,
											autoClose: 1500,
										}
									);
									return;
								}
								setChosenSize(size);
							}}
						>
							<p className={styles.container_mosaic__mosaic__item__text}>
								{size}
							</p>
						</div>
					))}
				</nav>
			</article>
		</section>
	);
};

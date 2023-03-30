import { ReactElement } from 'react';
import SubProduct from '@/models/subProduct';
import Select from 'react-select';
import { Talle } from '@interfaces/IProduct';
import { toast } from 'react-toastify';

export interface VariantSelectorProps {
	subProducts: SubProduct[];
	chosenSize: string | undefined;
	setChosenSize: (size: string) => void;
	changeChosenSubProduct: (subproduct: SubProduct) => void;
	chosenSubProduct: SubProduct | undefined;
	getSize: () => string | undefined;
}

export interface IOptionColor {
	value: string;
	label: string;
	image: string;
}

export interface OptionColorProps {
	option: IOptionColor;
}

export interface IOptionSize {
	value: string;
	label: string;
}

export interface OptionSizeProps {
	option: IOptionSize;
}

export const VariantSelector = ({
	subProducts,
	chosenSubProduct,
	changeChosenSubProduct,
}: VariantSelectorProps): ReactElement => {
	const selectedOptionSubProduct: IOptionColor | null =
		chosenSubProduct !== undefined
			? {
					value: chosenSubProduct.color,
					label: chosenSubProduct.color,
					image: chosenSubProduct.frontImage,
			  }
			: null;

	const selectedOptionSize: IOptionSize | null =
		chosenSubProduct !== undefined
			? {
					value: chosenSubProduct.talles[0].talle,
					label: chosenSubProduct.talles[0].talle,
			  }
			: null;

	return (
		<section style={{ marginTop: '1rem' }}>
			<h2 style={{ display: 'none' }}>selector</h2>
			<article>
				<h3>Color:</h3>
				<Select
					value={selectedOptionSubProduct}
					onChange={event => {
						if (event === null) {
							toast.error('Error al cargar el producto');
							return;
						}
						changeChosenSubProduct(
							subProducts.find(
								subproduct => subproduct.color === event.value
							) as SubProduct
						);
					}}
					options={subProducts.map(
						subproduct =>
							// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
							({
								value: subproduct.color,
								label: subproduct.color,
								image: subproduct.frontImage,
							} as IOptionColor)
					)}
					formatOptionLabel={option => <OptionColor option={option} />}
				/>
			</article>
			<article>
				<h3>Talle:</h3>
				<Select
					value={selectedOptionSize}
					onChange={event => {
						console.log(event);
					}}
					options={
						chosenSubProduct?.talles.map((talle: Talle) => ({
							value: talle.talle,
							label: talle.talle,
						})) as IOptionSize[]
					}
					formatOptionLabel={option => <OptionSize option={option} />}
				/>
			</article>
		</section>
	);
};

const OptionColor = ({ option }: OptionColorProps): ReactElement => (
	<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
		<img src={option.image} alt={option.label} style={{ width: '50px' }} />
		<span>{option.label}</span>
	</div>
);

const OptionSize = ({ option }: OptionSizeProps): ReactElement => (
	<div style={{ display: 'flex', alignItems: 'center' }}>
		<p style={{ fontSize: '1.25rem', fontWeight: 'bolder' }}>{option.label}</p>
	</div>
);

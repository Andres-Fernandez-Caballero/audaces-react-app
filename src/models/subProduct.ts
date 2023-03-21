import { Subproducto, Talle } from '@interfaces/IProduct';

class SubProduct {
	private readonly subProduct: Subproducto;

	constructor(subProduct: Subproducto) {
		this.subProduct = subProduct;
	}

	get frontImage(): string {
		return this.subProduct.images.length > 0
			? this.subProduct.images[1].image
			: '/res/img/remera_frente.png';
	}

	get backImage(): string {
		return this.subProduct.images.length > 0
			? this.subProduct.images[0].image
			: '/res/img/remera_atras.png';
	}

	get id(): number {
		return this.subProduct.id;
	}

	get color(): string {
		return this.subProduct.color;
	}

	get talles(): Talle[] {
		return this.subProduct.talles;
	}
}

export default SubProduct;

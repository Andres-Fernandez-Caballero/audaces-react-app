import { IProduct, Subproducto, Title } from '@interfaces/IProduct';

class Product {
	private readonly product: IProduct;

	constructor(product: IProduct) {
		this.product = product;
	}

	get id(): number {
		return this.product.id;
	}

	get subproducto(): Subproducto[] {
		return this.product.subproducto;
	}

	get title(): Title {
		return this.product.title;
	}

	get code(): string {
		return this.product.code;
	}

	get name(): string {
		return this.product.name;
	}

	get description(): string {
		return this.product.description;
	}

	get price(): number {
		return this.product.price;
	}

	frontImage(): string {
		if (
			this.product.subproducto.length > 0 &&
			this.product.subproducto[0].images.length > 0
		)
			return this.product.subproducto[0].images[1].image;
		else return '/res/img/remera_frente.png';
	}

	getProduct(): IProduct {
		return this.product;
	}

	get firstSubProduct(): Subproducto {
		return this.product.subproducto[0];
	}
}

export default Product;

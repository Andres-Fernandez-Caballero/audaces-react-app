export interface IProduct {
	id?: number;
	title: ITitle;
	code: string;
	name: string;
	description: string;
	// sex: 'FEMENINO' | 'MASCULINO' | 'UNISEX';
	sex: string;
	guard: string;
	cloth: string | null;
	// size: 'GRANDE' | 'MEDIANO' | 'CHICO' | 'INTERMEDIO' | '-' | null;
	size: string | null;
	weight: number;
	color_details: string | null;
	missing: unknown | null;
	price: number;
	precio_mayorista: number;
	oferta: boolean;
	bestof: boolean;
	visible: boolean;
	tabla_talles: string | null;
	discount: number;
	categories: number[];
	design: string | null;
}

export interface IProductListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IProduct[];
}

export interface ITitle {
	id?: number;
	titulo: string;
	preguntas: string;
	descripcion: string;
	info_tienda: string;
}

import { ILink } from './../interfaces/ILink';

export const PATH_NAME = {
	HOME: 'Home',
	TOOLS: 'Herramientas',
	ABOUT: 'About',
	PRODUCTS: 'Productos',
	DETAIL: 'Detalle',
};

export const URL = {
	HOME: '/',
	ABOUT: '/' + PATH_NAME.ABOUT,
	PRODUCTS: '/' + PATH_NAME.PRODUCTS,
};
export const navBarLinks: ILink[] = [
	{ name: PATH_NAME.HOME, url: URL.HOME },
	{ name: PATH_NAME.ABOUT, url: URL.ABOUT },
	{ name: PATH_NAME.PRODUCTS, url: URL.PRODUCTS },
];

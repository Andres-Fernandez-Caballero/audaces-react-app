import { ILink } from '@interfaces/ILink';

export const PATH_NAME = {
	HOME: 'Home',
	TOOLS: 'Herramientas',
	ABOUT: 'About',
	PRODUCTS: 'Productos',
	DETAIL: 'Detalle',
};

const root = '/';

export const URL = {
	HOME: root,
	ABOUT: root + PATH_NAME.ABOUT,
	PRODUCTS: root + PATH_NAME.PRODUCTS,
	PRODUCTS_DETAIL: root + PATH_NAME.PRODUCTS + '/' + PATH_NAME.DETAIL,
};
export const navBarLinks: ILink[] = [
	{ name: PATH_NAME.HOME, url: URL.HOME },
	{ name: PATH_NAME.ABOUT, url: URL.ABOUT },
	{ name: PATH_NAME.PRODUCTS, url: URL.PRODUCTS },
];

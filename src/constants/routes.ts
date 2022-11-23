import { ILink } from './../interfaces/ILink';

export const URL = {
	TOOLS: 'tools',
	HOME: 'home',
	ABOUT: 'about',
};

export const navBarLinks: ILink[] = [
	{ name: 'Home', url: `/${URL.HOME}` },
	{ name: 'About', url: `/${URL.ABOUT}` },
	{ name: 'Herramientas', url: `/${URL.TOOLS}` },
];

import { MenuPagination } from '@components/layouts/Pagination/MenuPagination/MenuPagination';
import { ReactElement } from 'react';

export interface MenuPaginationProps {
	nextPage: () => void;
	previousPage: () => void;

	hasNextPage: boolean;
	hasPreviousPage: boolean;
	page: number;
}

export interface ButtonPaginationProps {
	onClick: () => void;
	title: string;
	disabled: boolean;
}

export default (props: MenuPaginationProps): ReactElement => (
	<MenuPagination {...props} />
);

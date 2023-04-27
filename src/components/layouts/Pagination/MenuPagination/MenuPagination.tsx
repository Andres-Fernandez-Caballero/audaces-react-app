import { MenuPaginationProps } from '@components/layouts/Pagination/MenuPagination/index';
import { ButtonPagination } from '@components/layouts/Pagination/MenuPagination/ButtonPagination';
import { ReactElement } from 'react';

export const MenuPagination = ({
	page,
	nextPage,
	previousPage,
	hasNextPage,
	hasPreviousPage,
}: MenuPaginationProps): ReactElement => (
	<menu>
		<ButtonPagination onClick={nextPage} disabled={hasNextPage} title={'>'} />
		<p>{page}</p>
		<ButtonPagination
			onClick={previousPage}
			disabled={hasPreviousPage}
			title={'<'}
		/>
	</menu>
);

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
	<nav>
		<menu className='pagination pagination-sm justify-content-center m-auto'>
			<ButtonPagination
				onClick={previousPage}
				disabled={hasPreviousPage}
				title={'<<'}
			/>
			<p className='page-link border border-info m-2 p-2'>{page}</p>
			<ButtonPagination
				onClick={nextPage}
				disabled={hasNextPage}
				title={'>>'}
			/>
		</menu>
	</nav>
);

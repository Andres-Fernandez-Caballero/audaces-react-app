import { ButtonPaginationProps } from '@components/layouts/Pagination/MenuPagination/index';
import { ReactElement } from 'react';

export const ButtonPagination = (
	props: ButtonPaginationProps
): ReactElement => (
	<li className='page-item'>
		<button
			className='page-link border border-info text-bg-info'
			onClick={props.onClick}
			disabled={!props.disabled}
		>
			{props.title}{' '}
		</button>
	</li>
);

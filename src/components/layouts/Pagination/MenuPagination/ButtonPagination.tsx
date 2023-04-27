import { ButtonPaginationProps } from '@components/layouts/Pagination/MenuPagination/index';
import { ReactElement } from 'react';

export const ButtonPagination = (
	props: ButtonPaginationProps
): ReactElement => (
	<button onClick={props.onClick} disabled={!props.disabled}>
		{props.title}{' '}
	</button>
);

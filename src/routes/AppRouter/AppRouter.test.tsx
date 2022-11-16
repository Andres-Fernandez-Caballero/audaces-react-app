import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
	it('should render', () => {
		render(
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		);
	});
});

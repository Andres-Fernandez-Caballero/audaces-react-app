import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
	it('should render', () => {
		const { asFragment, queryAllByAltText } = render(
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		);
		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByAltText('hidra logo')).toBeTruthy();
	});
});

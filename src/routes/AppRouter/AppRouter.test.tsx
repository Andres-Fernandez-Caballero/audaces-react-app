import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from '@/store';

describe('AppRouter', () => {
	it('should render', () => {
		const { asFragment, queryAllByAltText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByAltText('hidra logo')).toBeTruthy();
	});
});

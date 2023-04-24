import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OverNavBar from '.';
import { Provider } from 'react-redux';
import store from '@/store';

describe('OverNavBar', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<OverNavBar />
				</BrowserRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Login/Registrate')).toBeTruthy();
	});
});

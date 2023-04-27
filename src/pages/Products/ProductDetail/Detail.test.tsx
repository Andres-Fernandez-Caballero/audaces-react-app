import { cleanup, render } from '@testing-library/react';
import Detail from './Detail';
import { Provider } from 'react-redux';
import store from '@/store';
import { BrowserRouter } from 'react-router-dom';

describe('Detail', () => {
	afterEach(cleanup);

	it('should render', () => {
		const {
			asFragment,
			// queryByText
		} = render(
			<BrowserRouter>
				<Provider store={store}>
					<Detail />
				</Provider>
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		// expect(queryByText('$')).toBeTruthy();
	});
});

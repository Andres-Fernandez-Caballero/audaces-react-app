import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import List from './List';
import { Provider } from 'react-redux';
import store from '@/store';

describe('List', () => {
	afterEach(cleanup);

	it('should render', () => {
		const {
			asFragment,
			// queryAllByText
		} = render(
			<Provider store={store}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		// expect(queryAllByText('$')).toHaveLength(10);
	});
});

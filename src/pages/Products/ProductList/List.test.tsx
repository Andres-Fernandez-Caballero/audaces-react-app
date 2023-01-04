import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import List from './List';

describe('List', () => {
	afterEach(cleanup);

	it.skip('should render', () => {
		const { asFragment, queryAllByText } = render(
			<BrowserRouter>
				<List />
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByText('$').length).toBeGreaterThan(0);
	});
});

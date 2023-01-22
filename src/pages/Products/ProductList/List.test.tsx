import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import List from './List';

describe('List', () => {
	afterEach(cleanup);

	it('should render', () => {
		const {
			asFragment,
			// queryAllByText
		} = render(
			<BrowserRouter>
				<List />
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		// expect(queryAllByText('$')).toHaveLength(10);
	});
});

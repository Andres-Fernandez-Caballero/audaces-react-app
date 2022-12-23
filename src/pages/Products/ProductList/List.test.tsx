import { cleanup, render } from '@testing-library/react';
import List from './List';

describe('List', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<List />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('List')).toBeTruthy();
	});
});

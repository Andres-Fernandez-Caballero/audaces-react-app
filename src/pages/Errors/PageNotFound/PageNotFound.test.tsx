import { cleanup, render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('Error_404', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<PageNotFound />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Error 404')).toBeTruthy();
	});
});

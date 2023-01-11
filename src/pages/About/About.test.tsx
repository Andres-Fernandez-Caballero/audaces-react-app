import { cleanup, render } from '@testing-library/react';
import About from './About';

describe('About', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('About')).toBeTruthy();
	});
});

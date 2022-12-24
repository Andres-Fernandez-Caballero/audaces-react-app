import { cleanup, render } from '@testing-library/react';
import Detail from './Detail';

describe('Detail', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<Detail />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Detail')).toBeTruthy();
	});
});

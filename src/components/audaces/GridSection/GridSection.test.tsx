import { cleanup, render } from '@testing-library/react';
import GridSection from './GridSection';

describe('GridSection', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryAllByText } = render(<GridSection />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByText('Section')).toHaveLength(4);
	});
});

import { cleanup, render } from '@testing-library/react';
import GridSection from './GridSection';

describe('GridSection', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryAllByText } = render(<GridSection />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryAllByText('Guardavidas')).toHaveLength(1);
		expect(queryAllByText('Hombre')).toHaveLength(1);
		expect(queryAllByText('Mujer')).toHaveLength(1);
		expect(queryAllByText('Natación')).toHaveLength(1);
	});
});

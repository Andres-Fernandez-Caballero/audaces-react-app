import { render } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
	it('should render', () => {
		const { asFragment, queryByText } = render(<Counter />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Counter')).toBeTruthy();
	});
});

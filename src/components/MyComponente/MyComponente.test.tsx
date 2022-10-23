import { cleanup, render } from '@testing-library/react';
import MyComponentefrom from './MyComponente';

describe('MyComponente', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<MyComponentefrom />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('MyComponente')).toBeTruthy();
	});
});

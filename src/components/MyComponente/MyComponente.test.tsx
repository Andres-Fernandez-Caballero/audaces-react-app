import { cleanup, render } from '@testing-library/react';
import React from 'react';
import MyComponente, { MyComponenteProps } from './MyComponente';

describe('MyComponente', () => {
	afterEach(cleanup);
	const defaultProps: MyComponenteProps = {};

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(<MyComponente {...props} />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('MyComponente')).toBeTruthy();
	});
});

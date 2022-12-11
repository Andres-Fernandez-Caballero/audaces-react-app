import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OverNavBar from '.';

describe('OverNavBar', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(
			<BrowserRouter>
				<OverNavBar />
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Bienvenido user')).toBeTruthy();
	});
});

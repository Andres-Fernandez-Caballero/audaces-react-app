import { cleanup, render } from '@testing-library/react';
import Navbar, { NavbarProps } from './Navbar';
import { expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

describe('Navbar', () => {
	afterEach(cleanup);
	const defaultProps: NavbarProps = {
		navLinks: [
			{ name: 'Home', url: '/' },
			{ name: 'About', url: '/about' },
		],
	};

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByAltText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Navbar {...props} />
				</BrowserRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByAltText('hidra logo')).toBeTruthy();
	});
});

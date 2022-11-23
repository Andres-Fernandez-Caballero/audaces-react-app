import { cleanup, render } from '@testing-library/react';
import Navbar, { NavbarProps } from './Navbar';
import { expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

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
			<BrowserRouter>
				<Navbar {...props} />
			</BrowserRouter>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByAltText('hidra logo')).toBeTruthy();
	});
});

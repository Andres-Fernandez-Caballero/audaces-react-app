import { cleanup, render } from '@testing-library/react';
import { expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Contactenos')).toBeTruthy();
		expect(queryByText('Atencion Al Cliente')).toBeTruthy();
		expect(queryByText('REDES SOCIALES')).toBeTruthy();
	});
});

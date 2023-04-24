import { cleanup, render } from '@testing-library/react';
import FeatureProductsCarousel from './FeatureProductsCarousel';

describe('FeatureProductsCarousel', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(<FeatureProductsCarousel />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Productos Destacados')).toBeTruthy();
	});
});

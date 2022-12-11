import { cleanup, render } from '@testing-library/react';
import ItemsSwiper, { ItemsSwiperProps } from './ItemsSwiper';

describe('ItemsSwiper', () => {
	afterEach(cleanup);
	const defaultProps: ItemsSwiperProps = { items: [] };

	it('should render', () => {
		const props = { ...defaultProps };
		const { asFragment, queryByText } = render(<ItemsSwiper {...props} />);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Items swiper')).toBeTruthy();
	});
});

import { render } from '@testing-library/react';
import banner from '../../../assets/imgs/banners/bermuda.banner.png';
import { JumboBanner, JumboBannerProps } from './JumboBanner';

describe('JumboBanner', () => {
	it('should render correctly', () => {
		const props: JumboBannerProps = {
			src: banner,
		};
		const urlImage = '/src/assets/imgs/banners/bermuda.banner.png';

		const { asFragment, getByAltText } = render(<JumboBanner {...props} />);
		expect(asFragment()).toMatchSnapshot();

		const img = asFragment().querySelector('img')?.getAttribute('src');
		expect(img).toBe(urlImage);
		expect(getByAltText('persona en malla en el mar')).toBeTruthy();
	});
});

import { cleanup, render } from '@testing-library/react';
import Detail from './Detail';
import { Provider } from 'react-redux';
import store from '@/store';

describe('Detail', () => {
	afterEach(cleanup);

	it('should render', () => {
		const {
			asFragment,
			// queryByText
		} = render(
			<Provider store={store}>
				<Detail />
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
		// expect(queryByText('$')).toBeTruthy();
	});
});

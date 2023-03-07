import { cleanup, render } from '@testing-library/react';
import Detail from './Detail';
import { Provider } from 'react-redux';
import store from '@/store';

describe('Detail', () => {
	afterEach(cleanup);


	it.skip('should render', () => {
		const { asFragment, queryByText } = render(<Detail />);

	});
});

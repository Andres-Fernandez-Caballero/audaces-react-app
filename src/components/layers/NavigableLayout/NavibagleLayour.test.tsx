import { cleanup, render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigableLayout } from './NavigableLayout';
import { Provider } from 'react-redux';
import store from '@/store';
// import { NavigableLayout } from './NavigableLayout';

describe('NavigableLayout', () => {
	afterEach(cleanup);
	it('should render correctly', () => {
		const { asFragment, queryByText, queryByAltText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<NavigableLayout />}>
							<Route index element={<div>Test</div>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Test')).toBeTruthy();
		expect(queryByAltText('hidra logo')).toBeTruthy();
	});
});

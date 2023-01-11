import { cleanup, render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigableLayout } from './NavigableLayout';
// import { NavigableLayout } from './NavigableLayout';

describe('NavigableLayout', () => {
	afterEach(cleanup);
	it('should render correctly', () => {
		const { asFragment, queryByText, queryByAltText } = render(
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<NavigableLayout />}>
						<Route index element={<div>Test</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('Test')).toBeTruthy();
		expect(queryByAltText('hidra logo')).toBeTruthy();
	});
});

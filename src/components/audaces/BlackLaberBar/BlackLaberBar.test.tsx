import { cleanup, render } from '@testing-library/react';
import BlackLabelBar from './BlackLabelBar';

describe('BlackLaberBar', () => {
	afterEach(cleanup);

	it('should render', () => {
		const { asFragment, queryByText } = render(
			<BlackLabelBar>
				<h1>hello word</h1>
			</BlackLabelBar>
		);

		expect(asFragment()).toMatchSnapshot();
		expect(queryByText('hello word')).toBeTruthy();
	});
});

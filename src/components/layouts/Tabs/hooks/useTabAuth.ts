import { useState } from 'react';
import { TAB_LOGIN } from '../constants';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useTabAuth(INIT_TAB: string = TAB_LOGIN) {
	const [tab, setTab] = useState(INIT_TAB);

	const setTabActive = (tabName: string): void => {
		setTab(tabName);
	};

	const isTabActive = (tabName: string): boolean => {
		return tab === tabName;
	};

	return { setTabActive, isTabActive };
}

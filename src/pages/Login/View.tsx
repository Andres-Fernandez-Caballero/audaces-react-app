import { useAppSelector } from '@hooks/redux..hook';
import { selectAuth } from '@slyces/auth.slyce';
import Spinner from '@components/Spinner';
import LoginView from '@pages/Login/Login.view';
import { ReactElement } from 'react';

export const View = (): ReactElement => {
	const authState = useAppSelector(selectAuth);
	return authState.loading ? <Spinner /> : <LoginView />;
};

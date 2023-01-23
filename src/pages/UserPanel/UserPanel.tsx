import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { logout, selectAuth } from '@/store/slyces/auth.slyce';
import { useNavigate } from 'react-router-dom';

export const UserPanel = (): JSX.Element => {
	const auth = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<main>
			<h1>User Panel</h1>

			<p>Username: {auth.user?.username}</p>
			<p>Email: {auth.user?.email}</p>

			<button
				onClick={() => {
					dispatch(logout());
					navigate('/');
				}}
			>
				Logout
			</button>
		</main>
	);
};

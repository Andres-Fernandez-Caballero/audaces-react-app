import styles from './OverNavBar.module.scss';
import BlackLabelBar from '../BlackLaberBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { openModalAuth } from '@store/slices/modalAuth.slyce';
import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { selectAuth } from '@/store/slices/auth.slyce';
import { Link } from 'react-router-dom';
// import { URL } from '@/constants/routes';

const OverNavBar: React.FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const auth = useAppSelector(selectAuth);

	return (
		<div className={styles.container}>
			<ul>
				<li className=''>
					{auth.isAuthenticate ? (
						<Link to='/user'>
							{' '}
							<FontAwesomeIcon icon='user' /> {auth.user?.username}{' '}
						</Link>
					) : (
						<button
							className='btn btn-primary'
							onClick={() => {
								dispatch(openModalAuth());
							}}
						>
							<h2 className=''> Login/Registrate</h2>
						</button>
					)}
				</li>
			</ul>
		</div>
	);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const componentOver = () => (
	<BlackLabelBar>
		<OverNavBar />
	</BlackLabelBar>
);

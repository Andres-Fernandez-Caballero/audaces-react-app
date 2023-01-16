import styles from './OverNavBar.module.scss';
import BlackLabelBar from '../BlackLaberBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { openModalAuth } from '@slyces/modalAuth.slyce';

const OverNavBar: React.FunctionComponent = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<ul>
				<li className=''>
					<button
						className='btn btn-primary'
						onClick={() => {
							dispatch(openModalAuth());
						}}
					>
						<h2 className=''> Login/Registrate</h2>
						<FontAwesomeIcon icon='user' />
					</button>
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

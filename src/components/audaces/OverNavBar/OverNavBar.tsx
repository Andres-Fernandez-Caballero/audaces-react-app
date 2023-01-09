import styles from './OverNavBar.module.scss';
import { Link } from 'react-router-dom';
import Modals from '@/components/layouts/Modal';
import BlackLabelBar from '../BlackLaberBar';

const OverNavBar: React.FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<h2 className=''> Bienvenido user</h2>
			<ul>
				<li className=''>
					<Link className='' to='#'>
						<Modals />
					</Link>
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

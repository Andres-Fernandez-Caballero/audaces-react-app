import styles from './OverNavBar.module.scss';
import { Link } from 'react-router-dom';
import { URL } from '../../../constants/routes';
import BlackLabelBar from '../BlackLaberBar';

const OverNavBar: React.FunctionComponent = () => (
	<div className={styles.container}>
		<h2 className=''> Bienvenido user</h2>
		<ul>
			<li className=''>
				<Link className='' to={URL.TOOLS}>
					Herramientas
				</Link>
			</li>
			<li className=''>
				<Link className='' to={URL.TOOLS}>
					Salir
				</Link>
			</li>
		</ul>
	</div>
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const componentOver = () => (
	<BlackLabelBar>
		<OverNavBar />
	</BlackLabelBar>
);

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loader.module.scss';
import { ReactElement } from 'react';

export const Loader = (): ReactElement => {
	return (
		<aside className={styles.container}>
			<FontAwesomeIcon
				className={styles.container__spinner}
				icon={faSpinner}
				spin
			/>
		</aside>
	);
};

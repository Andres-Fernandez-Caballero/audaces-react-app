import { FC, ReactElement } from 'react';
import styles from './WhatsappFloatingButton.module.scss';
import { WHATSAPP_BUSINESS_NUMBER } from '@constants/messaging';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhatsappFloatingButton: FC = (): ReactElement => (
	<nav className={styles.whatsapp__fab}>
		<a
			href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}`}
			target='_blank'
			rel='noreferrer'
			className='whatsapp-float'
			aria-label='Whatsapp'
		>
			<FontAwesomeIcon className={styles.whatsapp__fab__icon} icon='comments' />
		</a>
	</nav>
);

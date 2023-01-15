import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Tabs from '@components/layouts/Tabs';

const Modals: React.FC = () => {
	const [open, setOpen] = useState(false);

	const onCloseModal = (): void => setOpen(false);

	const onOpenModal = (): void => setOpen(true);

	const closeIcon = (
		<FontAwesomeIcon
			icon='xmark'
			className='text-info'
			style={{ fontSize: '2rem' }}
		/>
	);

	return (
		<>
			<button className='btn btn-primary' onClick={onOpenModal}>
				<FontAwesomeIcon icon='user' />
			</button>
			<Modal open={open} onClose={onCloseModal} center closeIcon={closeIcon}>
				<Tabs />
			</Modal>
		</>
	);
};
export default Modals;

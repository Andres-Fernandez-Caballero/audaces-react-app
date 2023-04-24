// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'react-responsive-modal/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeModalAuth,
	IModalModalState,
	selectModalState,
} from '@store/slices/modalAuth.slyce';
import Tabs from '@components/layouts/Tabs';
import Modal from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modals: React.FC = () => {
	const showModal = useSelector(selectModalState) as IModalModalState;
	const dispatch = useDispatch();

	const closeIcon = (
		<FontAwesomeIcon
			icon='xmark'
			className='text-info'
			style={{ fontSize: '2rem' }}
		/>
	);

	return (
		<Modal
			open={showModal.isOpen}
			onClose={() => {
				dispatch(closeModalAuth());
			}}
			center
			closeIcon={closeIcon}
		>
			<Tabs />
		</Modal>
	);
};
export default Modals;

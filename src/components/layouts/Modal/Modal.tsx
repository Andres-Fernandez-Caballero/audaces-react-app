import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
export interface ModalsProps {
	children?: React.ReactNode;
}

const Modals: React.FC<ModalsProps> = (props: ModalsProps) => {
	const [open, setOpen] = useState(false);

	const onCloseModal = (): void => setOpen(false);

	const onOpenModal = (): void => setOpen(true);

	return (
		<div>
			<button onClick={onOpenModal}>Open modal</button>
			<Modal open={open} onClose={onCloseModal} center>
				{props.children}
			</Modal>
		</div>
	);
};
export default Modals;

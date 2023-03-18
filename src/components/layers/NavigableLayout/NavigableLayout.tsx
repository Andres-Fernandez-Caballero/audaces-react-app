import { Outlet } from 'react-router-dom';
import { navBarLinks } from '@constants/routes';
import OverNavBar from '@components/audaces/OverNavBar';
import Navbar from '@components/layouts/Navbar';
import Modal from '@components/layouts/Modal';
import WhatsappFloatingButton from '@components/layouts/WhatsappFloatingButton';
import { FC, ReactElement } from 'react';

export const NavigableLayout: FC = (): ReactElement => {
	return (
		<>
			<OverNavBar />
			<Modal />
			<Navbar navLinks={navBarLinks} />
			<WhatsappFloatingButton />
			<Outlet />
		</>
	);
};

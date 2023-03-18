import { Outlet } from 'react-router-dom';
import { navBarLinks } from '@constants/routes';
import OverNavBar from '@components/audaces/OverNavBar';
import Navbar from '@components/layouts/Navbar';
import Modal from '@components/layouts/Modal';
import { FC, ReactElement } from 'react';
import WhatsappFloatingButton from '@/components/layouts/WhatsappFloatingButton';
import ContainedFooter from '@/components/layouts/Footer';

export const NavigableLayout: FC = (): ReactElement => {
	return (
		<>
			<OverNavBar />
			<Modal />
			<Navbar navLinks={navBarLinks} />
			<WhatsappFloatingButton />
			<Outlet />
			<ContainedFooter />
		</>
	);
};

import { Outlet } from 'react-router-dom';
import { navBarLinks } from '@constants/routes';
import OverNavBar from '@components/audaces/OverNavBar';
import Navbar from '@components/layouts/Navbar';
import Modal from '@components/layouts/Modal';
import ContainedFooter from '@/components/layouts/Footer';

export const NavigableLayout: React.FunctionComponent = () => {
	return (
		<>
			<OverNavBar />
			<Modal />
			<Navbar navLinks={navBarLinks} />
			<Outlet />
			<ContainedFooter />
		</>
	);
};

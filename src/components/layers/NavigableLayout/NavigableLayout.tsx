import { Outlet } from 'react-router-dom';
import { navBarLinks } from '@constants/routes';
import OverNavBar from '@components/audaces/OverNavBar';
import Navbar from '@components/layouts/Navbar';
import Modal from '@components/layouts/Modal';
import { FC, ReactElement } from 'react';
import WhatsappFloatingButton from '@/components/layouts/WhatsappFloatingButton';
import ContainedFooter from '@/components/layouts/Footer';
import Loader from '@components/layouts/Loader';
import { selectLoading } from '@slices/loading.slyce';
import { useSelector } from 'react-redux';

export const NavigableLayout: FC = (): ReactElement => {
	const { isLoading } = useSelector(selectLoading);
	return (
		<>
			<OverNavBar />
			<Modal />
			<Navbar navLinks={navBarLinks} />
			<aside style={{ display: isLoading ? 'block' : 'none' }}>
				<Loader />
			</aside>
			<main
				style={{
					display: isLoading ? 'none' : 'block',
				}}
			>
				<WhatsappFloatingButton />
				<Outlet />
			</main>
			<ContainedFooter />
		</>
	);
};

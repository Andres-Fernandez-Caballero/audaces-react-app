import { Outlet } from 'react-router-dom';
import { navBarLinks } from '@constants/routes';
import OverNavBar from '@components/audaces/OverNavBar';
import Navbar from '@components/layouts/Navbar';

export const NavigableLayout: React.FunctionComponent = () => {
	return (
		<>
			<OverNavBar />
			<Navbar navLinks={navBarLinks} />
			<Outlet />
		</>
	);
};

import { Outlet } from 'react-router-dom';
import { navBarLinks } from '../../../constants/routes';
import OverNavBar from '../../audaces/OverNavBar';
// import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';

export const NavigableLayout: React.FunctionComponent = () => {
	return (
		<>
			<OverNavBar />
			<Navbar navLinks={navBarLinks} />
			<Outlet />
			{/* <Footer /> */}
		</>
	);
};

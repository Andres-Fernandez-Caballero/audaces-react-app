import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route path='dashboard' index element={<h1>Dashboard</h1>} />
				<Route path='settings' element={<h1>Settings</h1>} />
			</Route>
			<Route path='auth' element={<h1>Landing</h1>}>
				<Route path='landing' element={<h1>LandingPage</h1>} />
				<Route path='login' element={<h1>Login</h1>} />
				<Route path='register' element={<h1>Register</h1>} />
			</Route>

			<Route path='*' element={<h1>404</h1>} />
		</Routes>
	);
};

export default AppRouter;

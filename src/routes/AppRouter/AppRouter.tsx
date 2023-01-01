import { Route, Routes } from 'react-router-dom';
import { NavigableLayout } from '../../components/layers/NavigableLayout/NavigableLayout';
import { PATH_NAME } from '../../constants/routes';
import About from '../../pages/About';
import { Home } from '../../pages/Home';
import ProductDetail from '../../pages/Products/ProductDetail';
import ProductList from '../../pages/Products/ProductList';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigableLayout />}>
				<Route index element={<Home />} />
				<Route path={PATH_NAME.ABOUT} element={<About />} />

				<Route path={PATH_NAME.PRODUCTS}>
					<Route index element={<ProductList />} />
					<Route path={`${PATH_NAME.DETAIL}/:id`} element={<ProductDetail />} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Route>

			<Route path='auth'>
				<Route index element={<h1>LandingPage</h1>} />
				<Route path='login' element={<h1>Login</h1>} />
				<Route path='register' element={<h1>Register</h1>} />
			</Route>
		</Routes>
	);
};

export default AppRouter;

import { Route, Routes } from 'react-router-dom';
import { NavigableLayout } from '@components/layers/NavigableLayout/NavigableLayout';
import { PATH_NAME } from '@constants/routes';
import About from '@pages/About';
import Home from '@pages/Home';
import ProductDetail from '@pages/Products/ProductDetail';
import ProductList from '@pages/Products/ProductList';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigableLayout />}>
				<Route index element={<Home />} />
				<Route path={PATH_NAME.ABOUT} element={<About />} />

				<Route path={PATH_NAME.PRODUCTS}>
					<Route index element={<ProductList />} />
					<Route
						path={
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							`${PATH_NAME.DETAIL}/:id`
						}
						element={<ProductDetail />}
					/>
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Route>

			<Route path={PATH_NAME.AUTH}>
				<Route index element={<h1>LandingPage</h1>} />
				<Route path={PATH_NAME.LOGIN} element={<Login />} />
				<Route path={PATH_NAME.SIGNUP} element={<Register />} />
			</Route>
		</Routes>
	);
};

export default AppRouter;

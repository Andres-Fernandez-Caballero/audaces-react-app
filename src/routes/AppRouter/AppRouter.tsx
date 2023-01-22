import { Route, Routes } from 'react-router-dom';
import NavigableLayout from '@components/layers/NavigableLayout';
import { PATH_NAME } from '@constants/routes';
import About from '@pages/About';
import Home from '@pages/Home';
import ProductDetail from '@pages/Products/ProductDetail';
import ProductList from '@pages/Products/ProductList';
import Login from '@/pages/Login';
import { selectAuth } from '@/store/slyces/auth.slyce';
import { useAppSelector } from '@/hooks/redux..hook';
import UserPanel from '@/pages/UserPanel';

const AppRouter: React.FC = () => {
	const auth = useAppSelector(selectAuth);

	return (
		<>
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
					<Route path={PATH_NAME.AUTH}>
						<Route index element={<h1>LandingPage</h1>} />
						<Route path={PATH_NAME.LOGIN} element={<Login />} />
						<Route path={PATH_NAME.SIGNUP} element={<h1>Register</h1>} />
					</Route>
					<Route
						path='user'
						element={auth.isAuthenticate ? <UserPanel /> : <h1>401</h1>}
					/>
					<Route path='*' element={<h1>404</h1>} />
				</Route>
			</Routes>
		</>
	);
};

export default AppRouter;

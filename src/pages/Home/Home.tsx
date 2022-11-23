import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layouts/Navbar';
import { navBarLinks, URL } from '../../constants/routes';
import styles from './styles/Home.module.scss';
// export interface HomeInterface {}

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<nav className='navbar justify-content-center bg-dark'>
				<div className='d-flex'>
					<h2 className='navbar-brand'>Bienvenido user</h2>
					<ul className='navbar-nav' style={{ flexDirection: 'row' }}>
						<li className='nav-item'>
							<Link className='nav-link' to={URL.TOOLS}>
								Herramientas
							</Link>
						</li>
						<li className='nav-item mx-2'>
							<Link className='nav-link' to={URL.TOOLS}>
								Salir
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Navbar navLinks={navBarLinks} />
		</div>
	);
};

export default Home;

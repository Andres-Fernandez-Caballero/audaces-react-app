import React from 'react';
import BlackLabelBar from '../../components/audaces/BlackLaberBar';
import FeatureProductsCarousel from '../../components/audaces/FeatureProductsCarousel';
import GridSection from '../../components/audaces/GridSection';
import ItemsSwiper from '../../components/audaces/ItemsSwiper';
import OverNavBar from '../../components/audaces/OverNavBar';
import Footer from '../../components/layouts/Footer';
import Navbar from '../../components/layouts/Navbar';
import { navBarLinks } from '../../constants/routes';
import styles from './styles/Home.module.scss';
// export interface HomeInterface {}

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<OverNavBar />
			<Navbar navLinks={navBarLinks} />
			<ItemsSwiper items={[]} />
			<BlackLabelBar>
				<nav
					style={{ display: 'flex', margin: 'auto', verticalAlign: 'baseline' }}
				>
					<h2
						style={{
							fontSize: 'medium',
							color: 'whitesmoke',
							fontWeight: 'bolder',
						}}
					>
						De atletas para atletas
					</h2>
				</nav>
			</BlackLabelBar>
			<GridSection />
			<FeatureProductsCarousel />
			<Footer />
		</div>
	);
};

export default Home;

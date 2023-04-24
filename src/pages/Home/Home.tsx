import BlackLabelBar from '@components/audaces/BlackLaberBar';
import FeatureProductsCarousel from '@components/audaces/FeatureProductsCarousel';
import GridSection from '@components/audaces/GridSection';
import ItemsSwiper from '@components/audaces/ItemsSwiper';

// export interface HomeInterface {}

const Home: React.FC = () => {
	return (
		<div className='container-fluid'>
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
							display: 'flex',
							justifyContent: 'center',
							padding: '1rem',
						}}
					>
						De atletas para atletas
					</h2>
				</nav>
			</BlackLabelBar>
			<GridSection />
			<FeatureProductsCarousel />
		</div>
	);
};

export default Home;

import styles from './ItemsSwiper.module.scss';
import itemFondo from '@assets/imgs/Home/itemSwiper.jpeg';

export interface ItemsSwiperProps {
	items: string[];
}

const ItemsSwiper: React.FunctionComponent<ItemsSwiperProps> = ({
	items,
}: ItemsSwiperProps) => {
	if (items.length > 0) {
		console.log(items);
	}
	return (
		<section className={styles.container}>
			<article className={styles.element}>
				<img
					className='img-fluid'
					src={itemFondo}
					height={800}
					width={1400}
					alt='img'
				/>
			</article>
		</section>
	);
};

export default ItemsSwiper;

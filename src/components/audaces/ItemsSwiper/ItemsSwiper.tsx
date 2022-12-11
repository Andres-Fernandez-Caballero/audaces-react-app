import styles from './ItemsSwiper.module.scss';

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
			<article>
				<h2>Items swiper</h2>
				<p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nemo
						sit quod tempore et commodi quae laboriosam nostrum blanditiis
						voluptatem odit delectus id aliquam repudiandae numquam optio
						officiis accusamus aperiam.
					</span>
					<span>
						Asperiores, quidem repellat. Deserunt magni reprehenderit provident
						incidunt recusandae debitis molestiae, earum rem quos deleniti
						temporibus consequatur officia ad molestias, eius vel accusantium.
						Labore sequi temporibus amet! Iusto, maxime nihil.
					</span>
				</p>
			</article>
		</section>
	);
};

export default ItemsSwiper;

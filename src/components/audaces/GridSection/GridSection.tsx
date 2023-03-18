import styles from './GridSection.module.scss';
import natacion from '@assets/imgs/Home/natacion.jpeg';
import guardavida from '@assets/imgs/Home/guardavida.jpeg';
import hombre from '@assets/imgs/Home/hombre.jpeg';
import mujer from '@assets/imgs/Home/mujer.jpeg';
const GridSection: React.FunctionComponent = () => {
	return (
		<section className='container-fluid'>
			<div className='row d-flex justify-content-center'>
				<article
					className='col-sm-10 col-lg-6'
					style={{ marginBottom: '3rem	', position: 'relative' }}
				>
					<a href=''>
						<div className={styles.img_main}>
							<img className={styles.img_overlays} src={guardavida} alt='img' />
						</div>
					</a>
					<div>
						<h2 className={styles.section_name}>Section</h2>
					</div>
				</article>
				<article
					className='col-sm-10 col-lg-6'
					style={{ marginBottom: '3rem	', position: 'relative' }}
				>
					<a href=''>
						<div className={styles.img_main}>
							<img className={styles.img_overlays} src={hombre} alt='img' />
						</div>
					</a>
					<div>
						<h2 className={styles.section_name}>Section</h2>
					</div>
				</article>
				<article
					className='col-sm-10 col-lg-6'
					style={{ marginBottom: '3rem', position: 'relative' }}
				>
					<a href=''>
						<div className={styles.img_main}>
							<img className={styles.img_overlays} src={mujer} alt='img' />
						</div>
					</a>
					<div>
						<h2 className={styles.section_name}>Section</h2>
					</div>
				</article>
				<article
					className='col-sm-10 col-lg-6'
					style={{ marginBottom: '3rem	', position: 'relative' }}
				>
					<a href=''>
						<div className={styles.img_main}>
							<img className={styles.img_overlays} src={natacion} alt='img' />
						</div>
					</a>
					<div>
						<h2 className={styles.section_name}>Section</h2>
					</div>
				</article>
			</div>
		</section>
	);
};

export default GridSection;

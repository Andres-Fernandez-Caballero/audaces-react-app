import styles from './GridSection.module.scss';

const GridSection: React.FunctionComponent = () => {
	return (
		<section className={styles.container}>
			<div className={styles.section}>
				<h1>Section</h1>
			</div>
			<div className={styles.section}>
				<h1>Section</h1>
			</div>
			<div className={styles.section}>
				<h1>Section</h1>
			</div>
			<div className={styles.section}>
				<h1>Section</h1>
			</div>
		</section>
	);
};

export default GridSection;

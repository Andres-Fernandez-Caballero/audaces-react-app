import styles from './Footer.module.scss';
import BlackLabelBar from '../../audaces/BlackLaberBar';

const Footer: React.FC = () => (
	<nav>
		<section className={styles.container}>
			<article className={styles.article}>
				<h3>Contactenos</h3>
				<ul>
					<li>Direccion: </li>
					<li>Telefono(Linea): </li>
					<li>Whatsapp: </li>
					<li>email: </li>
				</ul>
			</article>
			<article className={styles.article}>
				<h3>Atencion Al Cliente</h3>
				<ul>
					<li>Horario de atencion</li>
					<li>Medio de soporte</li>
				</ul>
			</article>
			<article className={styles.article}>
				<h3>REDES SOCIALES</h3>
				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
				</ul>
			</article>
		</section>
	</nav>
);

export const ContainedFooter: React.FC = () => (
	<BlackLabelBar>
		<Footer />
	</BlackLabelBar>
);
export default Footer;

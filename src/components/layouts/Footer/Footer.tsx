import './Footer.module.scss';
import BlackLabelBar from '@components/audaces/BlackLaberBar';
import AFIP from '../AFIP';

const Footer: React.FC = () => (
	<nav className='container-fluid' style={{ padding: '2rem' }}>
		<section className='container'>
			<article className='row row-cols-lg-3 row-cols-sm-1 d-flex justify-content-center text-white'>
				<section className='col-sm-6'>
					<h3>Contactenos</h3>
					<ul style={{ listStyleType: 'none' }}>
						<li>Direccion: </li>
						<li>Telefono(Linea):011 47252855 </li>
						<li>Whatsapp: </li>
						<li>email: </li>
					</ul>
				</section>
				<section className='col-sm-6'>
					<h3>Atencion Al Cliente</h3>
					<ul style={{ listStyleType: 'none' }}>
						<li>Horario de atencion</li>
						<li>Medio de soporte</li>
					</ul>
				</section>
				<section className='col-sm-6'>
					<h3>REDES SOCIALES</h3>
					<ul style={{ listStyleType: 'none' }}>
						<li>Facebook</li>
						<li>Instagram</li>
					</ul>
				</section>
				<article className='row d-flex justify-content-center'>
					<AFIP />
				</article>
			</article>
			<article className='row d-flex justify-content-center'>
				<section className='col-sm-12 col-6 mt-3'>
					<span
						className='text-white d-inline-block'
						style={{ fontSize: '500' }}
					>
						{' '}
						HidraSport ® 2023{' '}
					</span>
				</section>
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

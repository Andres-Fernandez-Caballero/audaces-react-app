import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { ILink } from '@interfaces/ILink';
import { URL } from '@constants/routes';
import hidraLogo2 from '@assets/hidraLogo2.png';
import styles from './styles/Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { openModalAuth } from '@slyces/modalAuth.slyce';

export interface NavbarProps {
	navLinks: ILink[];
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
	navLinks,
}: NavbarProps) => {
	const dispatch = useDispatch();

	const activeLinkStyle = {
		color: '#4066ad',
	};

	const inactiveLinkStyle = {
		color: 'black',
		fontWeight: 'none',
	};

	return (
		<div className={styles.navbar}>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand d-flex mx-auto justify-content-center align-items-end'
						to={URL.HOME}
					>
						<img src={hidraLogo2} height={100} alt='hidra logo' />
					</Link>
					<button
						className='navbar-toggler order-lg-3 orden-1'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo01'
						aria-controls='navbarTogglerDemo01'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse d-lg-flex justify-content-center'
						id='navbarTogglerDemo01'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{navLinks.map(link => (
								<li className='nav-item' key={link.name}>
									<NavLink
										style={({ isActive }) =>
											isActive ? activeLinkStyle : inactiveLinkStyle
										}
										className='nav-link'
										to={link.url}
									>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className='navbar-nav order-1'>
						<div
							className={styles.navbar__cartshop}
							onClick={() => {
								dispatch(openModalAuth());
							}}
						>
							<FontAwesomeIcon icon='cart-shopping' />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

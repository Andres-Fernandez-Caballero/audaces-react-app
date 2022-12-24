import { Link, NavLink } from 'react-router-dom';
import { ILink } from '../../../interfaces/ILink';
import hidraLogo from '../../../assets/hidraLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { URL } from '../../../constants/routes';

export interface NavbarProps {
	navLinks: ILink[];
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
	navLinks,
}: NavbarProps) => {
	const activeLinkStyle = {
		color: 'black',
		fontWeight: 'bold',
	};

	const inactiveLinkStyle = {
		color: 'black',
		fontWeight: 'none',
	};

	return (
		<nav className='navbar navbar-expand-lg bg-ligth'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to={URL.HOME}>
					<img src={hidraLogo} height={100} alt='hidra logo' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
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
					<div className='d-flex'>
						<div
							style={{
								fontSize: '1.5rem',
								margin: '1rem',
								border: '2px solid #ccc',
								borderRadius: '10%',
								padding: '0.5rem',
							}}
						>
							<FontAwesomeIcon icon='cart-shopping' />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

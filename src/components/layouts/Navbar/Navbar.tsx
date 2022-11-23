import { Link } from 'react-router-dom';
import { ILink } from '../../../interfaces/ILink';
import hidraLogo from '../../../assets/hidraLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface NavbarProps {
	navLinks: ILink[];
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
	navLinks,
}: NavbarProps) => {
	return (
		<nav className='navbar navbar-expand-lg bg-ligth'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='#'>
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
						<li className='nav-item'>
							<Link className='nav-link text-dark' aria-current='page' to='#'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-dark' to='#'>
								Link
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								className='nav-link dropdown-toggle text-dark'
								to='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Dropdown
							</Link>
							<ul className='dropdown-menu'>
								<li>
									<Link className='dropdown-item text-dark' to='#'>
										Action
									</Link>
								</li>
								<li>
									<Link className='dropdown-item text-dark' to='#'>
										Another action
									</Link>
								</li>

								<li>
									<Link className='dropdown-item text-dark' to='#'>
										Something else here
									</Link>
								</li>
							</ul>
						</li>
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

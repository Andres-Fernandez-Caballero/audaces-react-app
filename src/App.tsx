import Navbar from './components/Layouts/Navbar';
import { navBarLinks } from './constants/routes';

function App(): JSX.Element {
	return (
		<div className='App'>
			<Navbar navLinks={navBarLinks} />
			<a href='#' className='btn btn-primary'>
				Soy un boton!!!
			</a>
		</div>
	);
}

export default App;

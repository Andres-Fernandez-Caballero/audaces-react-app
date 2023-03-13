import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import AppRouter from '@routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

library.add(fas, far);

function App(): JSX.Element {
	return (
		<>
			<ToastContainer />
			<AppRouter />
		</>
	);
}

export default App;

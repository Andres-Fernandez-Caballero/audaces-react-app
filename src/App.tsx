import AppRouter from './routes/AppRouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

function App(): JSX.Element {
	return <AppRouter />;
}

export default App;

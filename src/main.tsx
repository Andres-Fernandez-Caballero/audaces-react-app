import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/app.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as popper from '@popperjs/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

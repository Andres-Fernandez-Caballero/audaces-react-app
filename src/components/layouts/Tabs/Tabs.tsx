import Login from '@/pages/Login';
import Register from '@/pages/Register';
import React, { useState } from 'react';

const Tabs: React.FC = () => {
	const [tab, setTab] = useState('Login');

	return (
		<>
			<div className='container'>
				<ul
					className='nav nav-pills justify-content-center p-2 border-bottom border-info'
					id='myTab'
					role='tablist'
				>
					<li className='nav-item' role='presentation'>
						<button
							className={tab === 'Login' ? 'nav-link active' : 'nav-link'}
							onClick={() => setTab('Login')}
						>
							Login
						</button>
					</li>
					<li className='nav-item' role='presentation'>
						<button
							className={tab === 'Register' ? 'nav-link active' : 'nav-link'}
							onClick={() => setTab('Register')}
						>
							Register
						</button>
					</li>
				</ul>
				<div className='tab-content' id='myTabContent'>
					<div className='tab-pane fade show active'>
						{tab === 'Login' && <Login />}
						{tab === 'Register' && <Register />}
					</div>
				</div>
			</div>
		</>
	);
};
export default Tabs;

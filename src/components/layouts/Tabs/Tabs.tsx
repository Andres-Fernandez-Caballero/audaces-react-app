import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { useTabAuth } from './hooks/useTabAuth';
import { TabButton } from './TabButton';
import { TAB_LOGIN, TAB_REGISTER } from './constants';

const Tabs: React.FC = () => {
	const { isTabActive, setTabActive } = useTabAuth();

	return (
		<nav className='container'>
			<ul
				className='nav nav-pills justify-content-center p-2 border-bottom border-info'
				id='myTab'
				role='tablist'
			>
				<TabButton
					tabName={TAB_LOGIN}
					setTabActive={setTabActive}
					isTabActive={isTabActive}
				/>
				<TabButton
					tabName={TAB_REGISTER}
					setTabActive={setTabActive}
					isTabActive={isTabActive}
				/>
			</ul>
			<div className='tab-content' id='myTabContent'>
				<div className='tab-pane fade show active'>
					{isTabActive(TAB_LOGIN) && <Login />}
					{isTabActive(TAB_REGISTER) && <Register />}
				</div>
			</div>
		</nav>
	);
};
export default Tabs;

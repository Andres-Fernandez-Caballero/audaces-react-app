export interface TabButtonProps {
	tabName: string;
	setTabActive: (tabName: string) => void;
	isTabActive: (tabName: string) => boolean;
}

export const TabButton: React.FC<TabButtonProps> = ({
	tabName,
	setTabActive,
	isTabActive,
}: TabButtonProps) => {
	return (
		<li className='nav-item' role='presentation'>
			<button
				className={isTabActive(tabName) ? 'nav-link active' : 'nav-link'}
				onClick={() => setTabActive(tabName)}
			>
				{tabName}
			</button>
		</li>
	);
};

import styles from './BlackLabelBar.module.scss';

export interface BlackLabelBarProps {
	children?: React.ReactNode;
}

const BlackLabelBar: React.FunctionComponent<BlackLabelBarProps> = ({
	children,
}: BlackLabelBarProps) => {
	return (
		<nav className={styles.container}>
			<div style={{ display: 'flex' }}>{children}</div>
		</nav>
	);
};

export default BlackLabelBar;

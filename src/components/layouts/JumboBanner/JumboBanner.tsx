export interface JumboBannerProps {
	src: string;
}

export const JumboBanner: React.FunctionComponent<JumboBannerProps> = ({
	src,
}: JumboBannerProps) => (
	<figure
		style={{
			overflowX: 'hidden',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '10px',
			gap: '10px',
			width: '1850px',
			height: '1100px',
		}}
	>
		<img
			style={{
				flex: 'none',
				order: 2,
				alignSelf: 'stretch',
				flexGrow: 0,
			}}
			src={src}
			alt='persona en malla en el mar'
		/>
	</figure>
);

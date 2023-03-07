import React from 'react';

const Spinner: React.FC = (): React.ReactElement => {
	return (
		<div className='d-flex mx-auto'>
			<div className='spinner-border text-dark' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;

import { afipQR } from '@/constants/afip';
import { afipDataWeb } from '@/constants/afipDataWeb';

const AFIP: React.FC = () => {
	return (
		<section className='col-sm-4 col-4'>
			<a href={afipQR} target='_F960AFIPInfo'>
				<img src={afipDataWeb} style={{ width: '60px', height: '80px' }} />
			</a>
		</section>
	);
};
export default AFIP;

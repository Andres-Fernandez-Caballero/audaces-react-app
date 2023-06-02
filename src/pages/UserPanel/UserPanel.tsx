import { useAppDispatch, useAppSelector } from '@/hooks/redux..hook';
import { logout, selectAuth } from '@/store/slices/auth.slyce';
import {
	faPenToSquare,
	faPersonWalkingArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export const UserPanel = (): JSX.Element => {
	const auth = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const ExitIcon = (
		<FontAwesomeIcon
			icon={faPersonWalkingArrowRight}
			className='text-white mx-2'
		/>
	);

	const EditIcon = (
		<button className='btn btn-primary btn-sm'>
			Editar
			<FontAwesomeIcon icon={faPenToSquare} />
		</button>
	);
	const TitleUserPanel = (
		<section className='container'>
			<article className='row p-2'>
				<aside className='col-md-10'>
					<h1 className='text-start'>User Panel</h1>
				</aside>
				<aside className='col-md-2'>
					<button
						className=' btn btn-primary btn-sm'
						onClick={() => {
							dispatch(logout());
							navigate('/');
						}}
					>
						Logout
						{ExitIcon}
					</button>
					<div className='text-center'></div>
				</aside>
			</article>
		</section>
	);

	return (
		<main>
			{TitleUserPanel}
			<main className='container-fluid w-75 p-4'>
				<section className='card border border-info'>
					<h3 className='card-header bg-info text-white'>
						<article className='row'>
							<span className='col-md-10 text-start'>Mis Datos</span>
							<span className='col-md-2 text-end'>{EditIcon}</span>
						</article>
					</h3>
					<div className='card-body'>
						<p>Username: {auth.user?.username}</p>
						<p>Email: {auth.user?.email}</p>
					</div>
				</section>
			</main>
		</main>
	);
};

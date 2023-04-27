import { ReactElement } from 'react';

export interface FAQProps {
	questions: string;
}

export const FAQ = ({ questions }: FAQProps): ReactElement => (
	<article className='accordion' id='preguntas-frecuentes'>
		<div className='accordion-item'>
			<h3 className='accordion-header' id='preguntas-frecuentes-titulo'>
				<button
					className='accordion-button'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#preguntas-frecuentes-contenido'
					aria-expanded='true'
					aria-controls='preguntas-frecuentes-contenido'
				>
					Preguntas Frecuentes
				</button>
			</h3>
			<div
				id='preguntas-frecuentes-contenido'
				className='accordion-collapse collapse show'
				aria-labelledby='preguntas-frecuentes-titulo'
				data-bs-parent='#preguntas-frecuentes'
			>
				<div className='accordion-body'>
					<p>{questions}</p>
				</div>
			</div>
		</div>
	</article>
);

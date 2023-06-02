import { ReactElement, useState } from 'react';

export interface SearchBarProps {
	onSearch: (text: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps): ReactElement => {
	const [search, setSearch] = useState<string>('');

	function valueText(event: React.ChangeEvent<HTMLInputElement>): void {
		const text = event.target.value;
		setSearch(text);
	}

	function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		onSearch(search);
	}
	return (
		<form onSubmit={onSubmit} className='mb-3'>
			<label htmlFor='exampleFormControlInput1' className='form-label'>
				Email address
			</label>
			<input
				type='text'
				className='form-control'
				id='exampleFormControlInput1'
				placeholder='producto deseado'
				onChange={valueText}
			/>
			<button type='submit'>buscar</button>
		</form>
	);
};

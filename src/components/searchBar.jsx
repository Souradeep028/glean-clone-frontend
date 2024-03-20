import { useCallback, useEffect, useState } from 'react';
import { fetchData } from '@/api/fetch';
import SearchResult from './searchResult';
import { debounce } from 'lodash';

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const debouncedFetchData = useCallback(
		debounce(async (term) => {
			setIsLoading(true);
			setError(null);
			try {
				const result = await fetchData(term);
				setData(result);
			} catch (error) {
				setError(error);
				setData(null);
			} finally {
				setIsLoading(false);
			}
		}, 1000),
		[]
	);

	useEffect(() => {
		if (!searchTerm) return;
		debouncedFetchData(searchTerm);
	}, [searchTerm]);

	return (
		<>
			<div className='flex justify-center items-center w-full md:px-60 mb-4 md:mb-12'>
				<input
					type='text'
					placeholder='Search your org...'
					className='flex-grow border-2 border-gray-300 bg-white h-10 md:h-12 px-4 md:px-5 pr-16 rounded-l-full text-sm focus:outline-none focus:border-blue-400'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					type='submit'
					className='bg-[#f7674d] hover:bg-[#f7674dec] text-white font-semibold h-10 md:h-12 px-3 md:px-4 rounded-r-full transition ease-in duration-200'>
					Search
				</button>
			</div>
			<SearchResult searchTerm={searchTerm} isLoading={isLoading} error={error} data={data} />
		</>
	);
}

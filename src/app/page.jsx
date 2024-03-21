'use client';

import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';
import { fetchData } from '@/api/fetch';
import SearchBar from '@/components/searchBar';
import SearchResult from '@/components/searchResult';

export default function Home() {
	const { searchTerm, setSearchTerm, isLoading, error, data } = useDebouncedSearch(fetchData);
	return (
		<div className='bg-[#F0D6A9] min-h-screen flex flex-col items-center justify-start py-20 px-6'>
			<h2 className='text-3xl font-bold mb-6 text-[#621e68]'>Glean Clone</h2>
			<SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
			<SearchResult searchTerm={searchTerm} isLoading={isLoading} error={error} data={data} />
		</div>
	);
}

'use client';

import SearchBar from '@/components/searchBar';

export default function Home() {
	return (
		<div className='bg-[#F0D6A9] min-h-screen flex flex-col items-center justify-start py-20 px-6'>
			<h2 className='text-3xl font-bold mb-6 text-[#621e68]'>Glen Clone</h2>
			<SearchBar />
		</div>
	);
}

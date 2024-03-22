'use client';

import React from 'react';
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';
import { fetchData } from '@/api/apis';
import SearchBar from '@/components/searchBar';
import SearchResult from '@/components/searchResult';
import LoginForm from '@/components/login';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
	const { login, logout, username } = useAuth();
	const { searchTerm, setSearchTerm, isLoading, error, data } = useDebouncedSearch(fetchData);

	const handleLogout = () => {
		setSearchTerm('');
		logout();
	};

	if (error?.status === 401) {
		handleLogout();
	}

	if (!username) {
		return (
			<div className='bg-[#F0D6A9] py-20 px-6 min-h-screen'>
				<div className='flex flex-col items-center justify-start'>
					<h2 className='text-3xl font-bold mb-6 text-[#621e68]'>Glean Clone</h2>
					<LoginForm onLogin={login} />
				</div>
			</div>
		);
	}

	return (
		<div className='bg-[#F0D6A9] py-20 px-6 min-h-screen'>
			<button className='absolute top-5 right-5 text-[#621e68] font-bold' onClick={handleLogout}>
				Logout
			</button>
			<div className='flex flex-col items-center justify-start'>
				<h2 className='text-3xl font-bold mb-6 text-[#621e68]'>Glean Clone</h2>
				<SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} logout={logout} />
				<SearchResult searchTerm={searchTerm} isLoading={isLoading} error={error?.message} data={data} />
			</div>
		</div>
	);
}

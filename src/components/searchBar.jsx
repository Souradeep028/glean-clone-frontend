export default function SearchBar({ searchTerm, setSearchTerm }) {
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchClick = () => {
		setSearchTerm((preValue) => (searchTerm === preValue ? `${preValue} ` : preValue));
	};

	return (
		<>
			<div className='flex justify-center items-center w-full md:px-60 mb-4 md:mb-12'>
				<input
					type='text'
					placeholder='Search your org...'
					className='flex-grow border-2 border-gray-300 bg-white h-10 md:h-12 px-4 md:px-5 pr-16 rounded-l-full text-sm focus:outline-none focus:border-blue-400'
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<button
					type='submit'
					onClick={handleSearchClick}
					className='bg-[#f7674d] hover:bg-[#f7674dec] text-white font-semibold h-10 md:h-12 px-3 md:px-4 rounded-r-full transition ease-in duration-200'>
					Search
				</button>
			</div>
		</>
	);
}

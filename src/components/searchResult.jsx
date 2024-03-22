import Link from 'next/link';

const getRandomBadgeStyle = () => {
	const badgeStyles = [
		'bg-gray-50 text-gray-600 ring-gray-500/10 ring-1 ring-inset',
		'bg-red-50 text-red-700 ring-red-600/10 ring-1 ring-inset',
		'bg-yellow-50 text-yellow-800 ring-yellow-600/20 ring-1 ring-inset',
		'bg-green-50 text-green-700 ring-green-600/20 ring-1 ring-inset',
		'bg-blue-50 text-blue-700 ring-blue-700/10 ring-1 ring-inset',
		'bg-indigo-50 text-indigo-700 ring-indigo-700/10 ring-1 ring-inset',
		'bg-purple-50 text-purple-700 ring-purple-700/10 ring-1 ring-inset',
		'bg-pink-50 text-pink-700 ring-pink-700/10 ring-1 ring-inset',
	];
	const randomIndex = Math.floor(Math.random() * badgeStyles.length);
	return badgeStyles[randomIndex];
};

const formatCreatedAt = (createdAt) => {
	const date = new Date(createdAt);
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const SearchResult = ({ searchTerm, isLoading, error, data }) => {
	if (!searchTerm) {
		return <h2 className='text-xl font-bold mb-8 text-center text-[#621e68]'>Start your search...</h2>;
	}

	if (isLoading) {
		return <h2 className='text-xl font-bold mb-8 text-center text-[#621e68]'>Loading results...</h2>;
	}

	if (error) {
		return <h2 className='text-xl font-bold mb-8 text-center text-[#621e68]'>An error occurred: {error.message}</h2>;
	}

	if (!data) {
		return (
			<h2 className='text-xl font-bold mb-8 text-center text-[#621e68]'>
				Sorry, couldn't find any relevant details...
			</h2>
		);
	}

	console.log(data);

	return (
		<div className='container mx-auto'>
			<h2 className='text:sm md:text-xl font-bold mb-8 text-center w-full text-[#621e68]'>
				Here's the most relevant information we could find for you...
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4'>
				{data?.map((result, index) => (
					<div
						key={index}
						className='rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
						<div className='p-4'>
							<div className='flex justify-between items-center mb-2'>
								<h3 className='text-lg font-semibold text-[#621e68]'>{result.file_name}</h3>
								<p className='text-sm text-gray-700 mb-0'>Relevance: {result.relevance}</p>
							</div>
							<hr />
							<p className='text-sm text-gray-700 mb-2 mt-3'>Repository: {result.repository}</p>
							<p className='text-sm text-gray-700 mb-2'>Owner: {result.owner}</p>
							<p className='text-sm text-gray-700 mb-2'>Created: {formatCreatedAt(result.created_at)}</p>
							<p className='text-sm text-gray-700 mb-2'>Visibility: {result.visibility}</p>
							<div className='flex flex-wrap mb-2'>
								<span className='text-sm text-gray-700 mr-2'>Languages:</span>
								{result.languages_used?.map((language, index) => (
									<span
										key={index}
										className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium mr-2 ${getRandomBadgeStyle()}`}>
										{language}
									</span>
								))}
							</div>
							<div className='flex justify-end items-center'>
								<Link
									href={result.file_url}
									target='_blank'
									className='inline-block bg-[#f7674d] hover:bg-[#f7674d] text-white font-semibold py-1 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'>
									View File
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchResult;

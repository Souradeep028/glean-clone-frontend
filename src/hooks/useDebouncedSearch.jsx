import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

export const useDebouncedSearch = (searchFunction, debounceDelay = 1000) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const debouncedFetchData = useCallback(
		debounce(async (term) => {
			if (!term.trim()) {
				setData(null);
				setIsLoading(false);
				return;
			}

			setIsLoading(true);
			setError(null);
			try {
				const result = await searchFunction(term);
				setData(result);
			} catch (error) {
				setError(error);
				setData(null);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}, debounceDelay),
		[searchFunction, debounceDelay]
	);

	useEffect(() => {
		debouncedFetchData(searchTerm);
		return debouncedFetchData.cancel;
	}, [searchTerm, debouncedFetchData]);

	return { searchTerm, setSearchTerm, isLoading, error, data };
};

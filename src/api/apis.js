export const fetchData = async (term) => {
	const BASE_URL = 'https://6a26-2001-8f8-1135-1ad-a01a-72ba-299b-aef6.ngrok-free.app';
	const url = `${BASE_URL}/org-search/?query=${term}`;
	const accessToken = localStorage.getItem('accessToken');
	console.log(accessToken);
	try {
		const response = await fetch(url, {
			headers: new Headers({
				'ngrok-skip-browser-warning': '69420',
				Authorization: `Bearer ${accessToken}`,
			}),
		});
		if (!response.ok) {
			throw new Error(`Network response was not ok (status: ${response.status})`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
};

export const fetchTokens = async (username, password) => {
	try {
		const url = 'https://6a26-2001-8f8-1135-1ad-a01a-72ba-299b-aef6.ngrok-free.app/api/token/';
		const requestBody = { username, password };

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		});

		if (!response.ok) {
			throw new Error(`Login failed: ${response.status} ${response.statusText}`);
		}

		const { access, refresh } = await response.json();

		// console.log('Access Token:', access);
		// console.log('Refresh Token:', refresh);

		return { access, refresh };
	} catch (error) {
		console.error('Error during login:', error.message);
		throw error;
	}
};

export const refreshAccessToken = async (refresh) => {
	try {
		const url = 'https://6a26-2001-8f8-1135-1ad-a01a-72ba-299b-aef6.ngrok-free.app/api/token/refresh/';
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ refresh }),
		});

		if (!response.ok) {
			throw new Error(`Refresh token request failed: ${response.statusText}`);
		}

		const { accessToken: newAccessToken } = await response.json();
		return newAccessToken;
	} catch (error) {
		console.error('Error refreshing access token:', error);
		return null;
	}
};

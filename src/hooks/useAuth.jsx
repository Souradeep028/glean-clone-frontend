import React, { useEffect, useContext, createContext } from 'react';
import { fetchTokens, refreshAccessToken } from '@/api/apis';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const login = async (username, password) => {
		try {
			const { access, refresh } = await fetchTokens(username, password);
			localStorage.setItem('accessToken', access);
			localStorage.setItem('refreshToken', refresh);
			localStorage.setItem('username', username);
		} catch (error) {
			console.error('Login failed:', error);
			throw error;
		}
	};

	const logout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('username');
	};

	useEffect(() => {
		const tryRefreshToken = async () => {
			const refreshToken = localStorage.getItem('refreshToken');
			if (!refreshToken) {
				console.log('No refresh token available');
				localStorage.removeItem('username');
				return;
			}
			try {
				const newAccessToken = await refreshAccessToken(refreshToken);
				localStorage.setItem('accessToken', newAccessToken);
			} catch (error) {
				console.log('Refresh token failed', error);
				logout();
			}
		};

		const accessToken = localStorage.getItem('accessToken');
		if (!accessToken) {
			tryRefreshToken();
		}
	}, []);

	return <AuthContext.Provider value={{ login, logout }}>{children}</AuthContext.Provider>;
}

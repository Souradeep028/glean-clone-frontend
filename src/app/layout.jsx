'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'Glean Clone',
// 	description: 'This is a Glean Clone Project',
// };

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<title>Glean Clone</title>
			<body className={inter.className}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}

import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(''); // Add state to handle error feedback

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await onLogin(username, password);
		} catch (error) {
			setError('Failed to log in. Please check your credentials.');
		}
	};

	return (
		<div className='flex flex-col w-80 justify-center items-center m-4'>
			<div className='w-full bg-white rounded-2xl shadow-md p-8'>
				{error && <div className='text-red-500 text-sm mb-2'>{error}</div>}
				<form className='space-y-6' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username' className='text-sm font-medium text-gray-700'>
							Username
						</label>
						<input
							type='text'
							id='username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
					<div>
						<label htmlFor='password' className='text-sm font-medium text-gray-700'>
							Password
						</label>
						<div className='flex mt-1'>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className='block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							/>
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='ml-2 px-2 py-1 bg-gray-200 rounded-md'>
								{showPassword ? 'Hide' : 'Show'}
							</button>
						</div>
					</div>
					<div>
						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f7674d] hover:bg-[#eb6d56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							Log In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

const data = [
	{
		file_name: 'README.md',
		file_url: 'https://github.com/Souradeep028/tic-tac-toe/tree/main/README.md',
		repository: 'tic-tac-toe',
		repo_link: 'https://github.com/Souradeep028/tic-tac-toe',
		ssh_url: 'git@github.com:Souradeep028/tic-tac-toe.git',
		languages_used: ['JavaScript', 'CSS'],
		owner: 'Souradeep028',
		visibility: 'public',
		created_at: '2024-03-10T13:27:54Z',
		relevance: '60.5%',
	},
	{
		file_name: '.gitignore',
		file_url: 'https://github.com/Souradeep028/tic-tac-toe/tree/main/.gitignore',
		repository: 'tic-tac-toe',
		repo_link: 'https://github.com/Souradeep028/tic-tac-toe',
		ssh_url: 'git@github.com:Souradeep028/tic-tac-toe.git',
		languages_used: ['JavaScript', 'CSS'],
		owner: 'Souradeep028',
		visibility: 'public',
		created_at: '2024-03-10T13:27:54Z',
		relevance: '42.0%',
	},
	{
		file_name: 'next.config.mjs',
		file_url: 'https://github.com/Souradeep028/tic-tac-toe/tree/main/next.config.mjs',
		repository: 'tic-tac-toe',
		repo_link: 'https://github.com/Souradeep028/tic-tac-toe',
		ssh_url: 'git@github.com:Souradeep028/tic-tac-toe.git',
		languages_used: ['JavaScript', 'CSS'],
		owner: 'Souradeep028',
		visibility: 'public',
		created_at: '2024-03-10T13:27:54Z',
		relevance: '39.4%',
	},
	{
		file_name: 'layout.js',
		file_url: 'https://github.com/Souradeep028/tic-tac-toe/tree/main/src/app/layout.js',
		repository: 'tic-tac-toe',
		repo_link: 'https://github.com/Souradeep028/tic-tac-toe',
		ssh_url: 'git@github.com:Souradeep028/tic-tac-toe.git',
		languages_used: ['JavaScript', 'CSS'],
		owner: 'Souradeep028',
		visibility: 'public',
		created_at: '2024-03-10T13:27:54Z',
		relevance: '36.8%',
	},
	{
		file_name: 'postcss.config.js',
		file_url: 'https://github.com/Souradeep028/tic-tac-toe/tree/main/postcss.config.js',
		repository: 'tic-tac-toe',
		repo_link: 'https://github.com/Souradeep028/tic-tac-toe',
		ssh_url: 'git@github.com:Souradeep028/tic-tac-toe.git',
		languages_used: ['JavaScript', 'CSS'],
		owner: 'Souradeep028',
		visibility: 'public',
		created_at: '2024-03-10T13:27:54Z',
		relevance: '33.9%',
	},
];

export const fetchData = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = data;
			resolve(result);
		}, 500);
	});
};

// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Eesh',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Ready to break some systems? Good morning!',
	greetingAfternoon: 'Keep going! Good afternoon,',
	greetingEvening: 'Stay productive! Good evening,',
	greetingNight: 'Its time to rest up! Good night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '13.0827',
	defaultLongitude: '80.2707',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'SpaceMail',
			icon: 'mail',
			link: 'https://spacemail.com/',
		},
		{
			id: '4',
			name: 'Cloudflare Dash',
			icon: 'cloud',
			link: 'https://dash.cloudflare.com/',
		},
		{
			id: '5',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '6',
			name: 'roadmap',
			icon: 'server',
			link: 'http://roadmap.sh/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'Stack Overflow',
			icon: 'stack-overflow',
			link: 'https://stackoverflow.com/',
		},
		{
			id: '3',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon Books',
			icon: 'shopping-bag',
			link: 'https://amazon.com/books-used-books-textbooks/b/?ie=UTF8&node=283155',
		},
		{
			id: '5',
			name: 'Khan Academy',
			icon: 'pen-tool',
			link: 'https://khanacademy.org/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'book',
			id: '1',
			links: [
				{
					name: 'SRM Portal',
					link: 'https://sp.srmist.edu.in/',
				},
				{
					name: 'Haveloc',
					link: 'https://app.haveloc.com/',
				},
				{
					name: 'LeetCode',
					link: 'https://leetcode.com/',
				},
				{
					name: 'Supabase',
					link: 'https://supabase.com/',
				},
			],
		},
		{
			icon: 'server',
			id: '2',
			links: [
				{
					name: 'localhost:3000 (React)',
					link: 'http://localhost:3000/',
				},
				{
					name: 'localhost:8000 (Django)',
					link: 'http://localhost:8000/',
				},
				{
					name: 'localhost:8080 (proxy)',
					link: 'http://localhost:8080/',
				},
				{
					name: 'localhost:8834 (Nessus)',
					link: 'https://localhost:8834/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [

		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Frontend Mentor',
					link: 'https://www.frontendmentor.io/',
				},
				{
					name: 'LeetCode',
					link: 'https://leetcode.com/',
				},
				{
					name: 'GeeksforGeeks',
					link: 'https://www.geeksforgeeks.org/',
				},
				{
					name: 'GitHub',
					link: 'https://github.com/',
				},
			],
		},
	],
};

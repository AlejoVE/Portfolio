import profilePicture from './images/profilePicture.jpg';
import resume from './documents/CV-Alejandro-Montilla.pdf';
import multicube from './images/multicube-min.png';
// import calendarApp from './images/calendar-app-min.png';
import LigthZ from './images/lightZ-min.png';
import mwenbwa from './images/Mwenbwa.png';
import podcast from './images/podcast-fm.png';
import guitarLA from './images/guitar-la.png';
import laCafeteria from './images/la-cafeteria.png';
// import bivak from './images/bivak.png';
import musicApp from './images/musicApp-min.png';
import manon from './images/Manon-Brulard.jpg';
import logo from './images/logo.png';
import bg1 from './images/img-3.jpg';
import bg2 from './images/img-5.jpg';
// import bg3 from './images/bg-3.jpg';

const personData = {
	about: {
		name: `Alejandro Montilla`,
		phone: `+32487751895`,
		email: `ale.montilla.dev@gmail.com`,
		address: `Rue de la Tonne, 80B 4000 Liege, Belgium`,
		profession: [`Web Developer.`],
		profilePiPicture: profilePicture,
		resume,
		logo,
	},

	backgroundSlides: {
		slideOne: bg1,
		slideTwo: bg2,
		// slideThree: bg3,
	},

	socialMedias: [
		{
			url: `https://www.linkedin.com/in/alejandro-montilla/`,
			icon: `fab fa-linkedin-in`,
			name: `LinkedIn`,
		},
		{
			url: `https://github.com/AlejoVE`,
			icon: `fab fa-github-square`,
			name: `Github`,
		},
		{
			url: `https://twitter.com/AleMontilla_dev`,
			icon: `fab fa-twitter`,
			name: `Twitter`,
		},
	],

	background: [
		{
			school: `BeCode.`,
			url: `https://becode.org/`,
			experience: `Alumni `,
		},
		{
			school: `Hack Your Future Belgium.`,
			url: `https://hackyourfuture.be/`,
			experience: `I graduated as a fullstack web developer after completing an intensive 8-month program at `,
		},
		{
			school: `Hack Your future Belgium, in partnership with Microsoft Belgium.`,
			url: `https://facebook.com/story.php?story_fbid=788925451888092&id=163264831120827`,
			experience: `I participated in  a month-long bootcamp at `,
		},

		{
			school: ``,
			url: ``,
			experience: `I'm passionate about technology and web development.`,
		},
		{
			school: ``,
			url: ``,
			experience: `I have a high sense of responsibility, I'm very disciplined and persevering.`,
		},
		{
			school: ``,
			url: ``,
			experience: `I love hiking, visiting museums, traveling and discovering new places and cultures.`,
		},
		{
			school: ``,
			url: ``,
			experience: `I'm an open minded person, always willing to help and bring positive things to the people around me.`,
		},
	],

	skills: [
		{
			name: `front end`,
			language: [
				`HTML5,`,
				`CSS3,`,
				`Javascript,`,
				`React,`,
				`Vue,`,
				`Redux,`,
				`Bootstrap 4,`,
				`SASS`,
			],
			icon: `fas fa-laptop-code`,
		},
		{
			name: `back-end`,
			language: [`Node,`, `Express, `, `Socket.io`],
			icon: `fas fa-code`,
		},
		{
			name: `database`,
			language: [`MongoDB,`, `SQLite, `, `MySQL`],
			icon: `fas fa-database`,
		},
		{
			name: `version control`,
			language: [`Git,`, `Github`],
			icon: `fas fa-code-branch`,
		},
		{
			name: `cloud`,
			language: [`Heroku,`, `Netlify`],
			icon: `fas fa-cloud`,
		},
	],

	testimonials: [
		{
			message: `Berihu was one of the best student in his class. He's a true optimistic and a real team player. At the Demo Day of the bootcamp, he presented his project in front of an audience of 50 people and completed nailed it!`,
			name: `Manon Brulard`,
			job: `HackYourFuture Belgium Co-Founder`,
			url: `https://hackyourfuture.be/`,
			picture: manon,
		},
	],

	projects: [
		{
			title: 'Mwenbwa',
			technologies: [
				'React,',
				`CSS,`,
				`NodeJS,`,
				`Express, `,
				`Redux, `,
				`JWT, `,
				`MongoDB, `,
				`Leaflet, `,
				`Docker, `,
				`Webpack, `,
				`Heroku`,
			],
			about: `Mwenbwa is a WebApp that consist in an online IDLE game, based in Liège. I developed it completely from scratch together with a colleague.

			We made the backend with a REST API architecture.`,
			image: mwenbwa,
			repo: `https://github.com/AlejoVE/mwenbwa_mern/tree/main`,
			url: `https://mwenbwa-jepsens-4-27.herokuapp.com/`,
		},
		{
			title: 'MusicApp',
			technologies: ['React,', `SASS,`, `Spotify API,`, `Netlify`],
			about: `A cool application where you can explore different categories, playlists and add songs to my Spotify playlist.`,
			image: musicApp,
			repo: `https://github.com/AlejoVE/MusicApp`,
			url: `https://music-app-alejove.netlify.app/`,
		},
		// {
		// 	title: 'CalendarApp',
		// 	technologies: [
		// 		'React,',
		// 		'Redux,',
		// 		`Bootstrap,`,
		// 		`Nodejs,`,
		// 		`MongoDB,`,
		// 		`Express,`,
		// 		'JWT, ',
		// 		`Heroku,`,
		// 		`Netlify`,
		// 	],
		// 	about: `Cooperative calendar application that can be used by teams.`,
		// 	image: calendarApp,
		// 	repo: 'https://github.com/AlejoVE/Calendar-app-MERN',
		// 	url: `https://calendar-app-mern.netlify.app/`,
		// },
		{
			title: 'MultiCube',
			technologies: [
				'React, ',
				`Bootstrap, `,
				`Nodejs, `,
				`Express, `,
				'MongoDB, ',
				`Netlify, `,
				`Heroku`,
			],
			about: `A web app to teach numbers and addition to children between 7 and 10 years old. This was a month-long bootcamp project, where I had a role as a fullstack developer, but mainly in the back-end.`,
			image: multicube,
			repo: 'https://github.com/multicube-hyf/backend',
			url: `https://multicube.netlify.app/`,
		},
		{
			title: 'LigthZ',
			technologies: [
				'React, ',
				`Bootstrap, `,
				`Nodejs, `,
				`Express, `,
				'MongoDB, ',
				`JWT, `,
				`Heroku`,
			],
			about: 'This project was built to be used by Venezuelans in times of crisis, consists of a webpage that shows the user the reports of the places where there is electricity and where there is not. This was my final project as a student at Hack Your Future Belgium, I was part of the backend team.',
			image: LigthZ,
			repo: 'https://github.com/AlejoVE/lightz/tree/Alejandro',
			url: `https://havelight.herokuapp.com/lightz`,
		},
		{
			title: 'Podcast FM',
			technologies: ['HTML, ', `SCSS, `, `Netlify`],
			about: 'Responsive landing page for a fictitious podcast app. This project was done as a practice of SCSS.',
			image: podcast,
			repo: 'https://github.com/AlejoVE/podcast-app',
			url: `https://podcast-app-alejove.netlify.app/`,
		},
		{
			title: 'La Cafeteria',
			technologies: ['HTML, ', `SCSS, `, 'Gulp, ', `Netlify`],
			about: 'Complete responsive website for a fictitious coffee shop. This project was done as a practice of SCSS and how to use Gulp to create images (webp, avif), compile and minify the css code.',
			image: laCafeteria,
			repo: 'https://github.com/AlejoVE/la-cafeteria',
			url: `https://la-cafeteria-alejove.netlify.app/`,
		},
		{
			title: 'Guitar LA',
			technologies: ['HTML, ', `CSS, `, 'Gulp, ', `Netlify`],
			about: 'Complete website for a fictitious guitar store. This project was done as a practice of CSS and BEM methodology.',
			image: guitarLA,
			repo: 'https://github.com/AlejoVE/guitar-la',
			url: `https://guitar-alejove.netlify.app/`,
		},
		// {
		// 	title: ' Portfolio',
		// 	technologies: ['React', `Bootstrap`, `Netlify`],
		// 	about: `personal portfolio about me `,
		// 	image: portfolio,
		// 	url: `https://berihu.netlify.app/`,
		// },
		// {
		// 	title: ' Locate Bivouac Zone',
		// 	technologies: [
		// 		'React',
		// 		`Open Street Map`,
		// 		`Leaflet`,
		// 		`Express`,
		// 		`Mongodb`,
		// 		`Heroku`,
		// 	],
		// 	about: `a web app that helps nature lovers to find a bivouac zone in Belgium`,
		// 	image: bivak,
		// 	url: `https://bivak.netlify.app/`,
		// },
	],
};

export default personData;

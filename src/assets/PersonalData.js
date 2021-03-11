import profilePicture from './images/profilePicture.jpg';
import resume from './documents/resume-Alejandro-Montilla.pdf';
import vrconnetion from './images/vrconnection.png';
import merhatibebAcademy from './images/merhatibeb.png';
import portfolio from './images/portfolio.png';
import bivak from './images/bivak.png';
import chatMe from './images/chat.png';
import manon from './images/Manon-Brulard.jpg';
import logo from './images/logo.png';
import bg1 from './images/bg-1.jpg';
import bg2 from './images/bg-2.jpg';
import bg3 from './images/bg-3.jpg';

const personData = {
	about: {
		name: `Alejandro Montilla`,
		phone: `+32487751895`,
		email: `ale.montilla.dev@gmail.com`,
		address: `Rue de la Tonne, 80B 4000 Liege, Belgium`,
		profession: [`Web Developer`],
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
			icon: `fab fa-github`,
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
			school: `BeCode`,
			url: `https://becode.org/`,
			experience: `Currently Junior Web Developer at `,
		},
		{
			school: `Hack Your Future Belgium`,
			url: `https://hackyourfuture.be/`,
			experience: `I graduated as a fullstack web developer after completing an intensive 8-month program at `,
		},
		{
			school: `Hack Your future Belgium, in partnership with Microsoft Belgium.`,
			url: `https://facebook.com/story.php?story_fbid=788925451888092&id=163264831120827`,
			experience: `I participated in  a month-long bootcamp at `,
		},
		,
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
				`JavaScript,`,
				`React,`,
				`Redux,`,
				`Bootstrap 4,`,
				`SASS`,
			],
			icon: `fas fa-laptop-code`,
		},
		{
			name: `back-end`,
			language: [`Node,`, `Express`],
			icon: `fas fa-code`,
		},
		{
			name: `database`,
			language: [`MongoDB,`, `SQLite`],
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
			title: 'Merhatibeb Academy',
			technologies: ['wordpress', `Elementor`, `Siteground`],
			about: `A private school website`,
			image: merhatibebAcademy,
			url: `http://merhatibebacademy.com/`,
		},
		{
			title: ' VRConection',
			technologies: [
				'React',
				`Bootstrap`,
				`Nodejs`,
				`Mongodb`,
				`Express`,
				`Firebase`,
				`Google Cloud Platform`,
			],
			about: `A web app that connects refugee and volunteers`,
			image: vrconnetion,
			url: `https://vrconnection-9c6e5.web.app/`,
		},
		{
			title: 'Chat-Me',
			technologies: [
				'React',
				`CSS3`,
				`Socket.io`,
				`Nodejs`,
				`Netlify`,
				`Heroku`,
			],
			about: `A real time chat app`,
			image: chatMe,
			url: `https://be-chat.netlify.app/`,
		},
		{
			title: ' Portfolio',
			technologies: ['React', `Bootstrap`, `Netlify`],
			about: `personal portfolio about me `,
			image: portfolio,
			url: `https://berihu.netlify.app/`,
		},
		{
			title: ' Locate Bivouac Zone',
			technologies: [
				'React',
				`Open Street Map`,
				`Leaflet`,
				`Express`,
				`Mongodb`,
				`Heroku`,
			],
			about: `a web app that helps nature lovers to find a bivouac zone in Belgium`,
			image: bivak,
			url: `https://bivak.netlify.app/`,
		},
	],
};

export default personData;

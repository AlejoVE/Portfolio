import profilePiPicture from './images/profilepic.jpeg'
import resume from './documents/CV-Berihu.pdf'
import vrconnetion from './images/vrconnection.png'
import merhatibebAcademy from './images/merhatibeb.png'
import portfolio from './images/portfolio.png'
import bivak from './images/bivak.png';
import chatMe from './images/chat.png'

const personData = {
    about:{
            name:`Berihu Gebremedhin`,
            phone: `+32465327617`,
            email:`berihu05.20@gmail.com`,
            address:`8770 Ingelmunster (Belgium)`,
            profession:[`Mathematician`,`Web Developer`],
            profilePiPicture,
            resume
        },

    socialMedias:[
        {
            url:`https://www.linkedin.com/in/berihu-gebre/`,
            icon:`fab fa-linkedin-in`,
            name:`Linkedin`
        },
        {
            url:`https://github.com/berihugebre`,
            icon:`fab fa-github`,
            name:`Github`
        },
        {
            url:`https://twitter.com/Berihu74658089`,
            icon:`fab fa-twitter`,
            name:`Twitter`
        }
    ],

    background:[
        {
            school:`HackYourFutureBelgium`,
            url:`https://hackyourfuture.be/`,
            experience:`I am a quality-oriented recent  Web developer graduate from`
        },
        {
            school:`HackYourFutureBelgium Bootcamp`,
            url:`https://bootcamp.hackyourfuture.be/`,
            experience:`I participated 1 month bootcamp in Ghent with`
        },
        {
            school:`Merhatibeb Academy`,
            url:`http://merhatibebacademy.com/`,
            experience:`I worked as an ICT teacher and system administrator for 2 years in`
        },
        {
            school:`Adigrat University`,
            url:`http://www.adu.edu.et/`,
            experience:`I graduated in 2015 holding BSC degree in mathematics with CGPA 3.98/4.00 from`
        },
        {
            school:``,
            url:``,
            experience:`Every morning I'm a new version of myself and I'm top fun of playing Ping pong `
        },

    ],

    skills:[
        {
            name:`frontend`,
            language:[`HTML5`,`CSS3`,`JavaScript`,`React`,`Bootstrap 4`, `Wordpress`, `Elementor`,`Leaflet` ],
            icon:`fas fa-laptop-code`
        },
        {
            name:`backend`,
            language:[`Node`, `Express`,`GraphQL`,`Socket.io`],
            icon:`fas fa-code`
        },
        {
            name:`database`,
            language:[`MongoDB`,`MYSQL`],
            icon:`fas fa-database`
        },
        {
            name:`version control`,
            language:[`Git`,`Github`],
            icon:`fas fa-code-branch`
        },
        {
            name:`cloud`,
            language:[`Heroku`, `Netlify`,`Firebase`,`Siteground`],
            icon:`fas fa-cloud`
        }
    ],
    
    projects:[
        {
            title:"Merhatibeb Academy",
            technologies:['wordpress', `Elementor`,`Siteground`],
            about:`A private school website`,
            image:merhatibebAcademy,
            url:`http://merhatibebacademy.com/`
        },
        {
            title:" VRConection",
            technologies:['React', `Bootstrap`,`Nodejs`,`Mongodb`,`Express`, `Firebase`,`Google Cloud Platform`],
            about:`A web app that connects refugee and volunteers`,
            image:vrconnetion,
            url:`https://vrconnection-9c6e5.web.app/`
        },
        {
            title:"Chat-Me",
            technologies:['React', `CSS3`,`Socket.io`,`Nodejs`, `Netlify`,`Heroku`],
            about:`A real time chat app`,
            image:chatMe,
            url:`https://be-chat.netlify.app/`
        },
        {
            title:" Portfolio",
            technologies:['React', `Bootstrap`,`Netlify`],
            about:`personal portfolio about me `,
            image:portfolio,
            url:`https://berihu.netlify.app/`
        },
        {
            title:" Locate Bivouac Zone",
            technologies:['React',`Open Street Map`, `Leaflet`,`Express`,`Mongodb`,`Heroku`],
            about:`a web app that helps nature lovers to find a bivouac zone in Belgium`,
            image:bivak,
            url:`https://bivak.netlify.app/`
        }
  ]
};

export default personData;
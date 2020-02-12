
import profilepicture from '../assets/profilepicture.png';

import angular from '../assets/Logos/angular.svg';
import css from '../assets/Logos/css.svg';
import html from '../assets/Logos/html.svg';
import javascript from '../assets/Logos/javascript.svg';
import react from '../assets/Logos/react.svg';

import mongo from '../assets/Logos/mongo.svg';
import netcore from '../assets/Logos/netcore.svg';
import sql from '../assets/Logos/sql.svg';
import node from '../assets/Logos/node.svg';

import git from '../assets/Logos/git.png';
import scrum from '../assets/Logos/scrum.svg';
import macos from '../assets/Logos/macos.svg';

import location from '../assets/Logos/location.svg';
import email from '../assets/Logos/email.svg';
import phone from '../assets/Logos/phone.png';
import user from '../assets/Logos/user.png';

import github from '../assets/SocialMedia/github.svg';
import linkedin from '../assets/SocialMedia/linkedin.svg';
import download from '../assets/SocialMedia/download.png';

import downloadLink from '../assets/Curriculim_Vitae_Mariano_Andres_Venesio_B__F_.pdf';

const linkedinLink = 'https://www.linkedin.com/in/mariano-andr%C3%A9s-venesio-bianchi-fiorito-a544568b/'
const githubLink = 'https://github.com/Venedictto?tab=repositories'

const profilePicture = profilepicture;
const description = 'Estudiante de Licenciatura en Análisis de Sistemas (UBA) con tres años de experiencia como desarrollador web FullStack. Soy capaz de aprender de forma constante y responsable, una persona proactiva con capacidad de adaptarse a los cambios. Siempre busco obtener el mejor resultado posible para mi equipo, aportando nuevas ideas y soluciones. Puedo captar rápidamente nuevas tecnologías y diferentes procesos.'

const frontEndSkills = [
    {name:'JavaScript', logo:javascript},
    {name:'AngularJs', logo:angular},
    {name:'Angular 8', logo:angular},
    {name:'React', logo:react},
    {name:'HTML5', logo:html},
    {name:'CSS3', logo:css}
];
const backEndSkills = [
    {name:'NodeJs', logo:node},
    {name:'.NET', logo:netcore},
    {name:'SQL/MySql/PostgreSQL', logo:sql},
    {name:'MongoDB', logo:mongo}
];
const otherSkills = [
    {name:'SVN/TFS/GIT', logo:git},
    {name:'Agile/Scrum/Canvas', logo:scrum},
    {name:'MacOS/Ubuntu', logo:macos},
    {name:'Photoshop', logo:angular}
];
const contactData = [
    {name:'28 años, Argentino ', logo:user},
    {name:'(011)1556589904', logo:phone},
    {name:'mavenesio@gmail.com', logo:email},
    {name:'Palermo, CABA, Argentina', logo:location}
];
const experiences = [
    {
        title:'Codea IT',
        subTitle:'Full-Stack web developer',
        from:'2019',
        to:'Actualidad',
        description:'Actualmente me encuentro desempeñando el rol de desarrollador FullStack en diferentes proyectos usando una gran variedad de tecnologías como Angular 8, React with typescript, NodeJs, NET core, mongoDB, My SQL, entre otras.',
        leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
    },
    {
        title:'Creative Coefficient S.R.L',
        subTitle:'Full-Stack web developer',
        from:'2018',
        to:'2019',
        description:'Estuve, en mayor parte, tercerizado en la empresa NEC Latinoamerica desempeñando el papel de desarrollador FullStack, usando las tecnologías AngularJS, Angular 7, SQL server, .NET, entre otras. ',
        leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
    },
    {
        title:'Okapii',
        subTitle:'Full-Stack web developer',
        from:'2017',
        to:'2018',
        description:'Me desempeñé como desarrollador fullstack creando sistemas intra, a medida, para diferentes clientes, usando tecnologías como AngularJS, ASP:NET y .NET SQL server',
        leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
    }
];
const education = [
    {
        title:'Licenciatura En Sistemas',
        subTitle:'Facultad de Ingenieria de Buenos Aires (FIUBA)',
        from:'2013',
        to:'Actualidad',
        description:'',
        leftTitle:'',
    },
    {
        title:'Bachiller, modalidad Ciencias Sociales',
        subTitle:'Instituto Saturnino E Unzue, 25 de Mayo',
        from:'2004',
        to:'2009',
        description:'',
        leftTitle:'',
    }
];
const firstName = 'Mariano Andrés';
const lastName = 'Venesio Bianchi Fiorito';
const job = 'Full-Stack Web Developer';
export {
        job,
        firstName,
        lastName,
        description,
        education,
        frontEndSkills,
        backEndSkills,
        otherSkills,
        experiences,
        contactData,
        profilePicture,
        github,
        linkedin,
        download,
        linkedinLink,
        githubLink,
        downloadLink
    }
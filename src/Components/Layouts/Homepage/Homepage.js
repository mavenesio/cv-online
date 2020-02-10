
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molecules/Header/Header';
import ContactMe from '../../Molecules/ContactMe/ContactMe';
import Experience from '../../Molecules/Experience/Experience';
import SkillRating from '../../Atoms/SkillRating/SkillRating';
import SkillList from '../../Molecules/SkillList/SkillList';
import kermit from '../../../assets/Kermit.png';
import Card from '../../Atoms/Card/Card';

import angular from '../../../assets/Logos/angular.svg';
import css from '../../../assets/Logos/css.svg';
import html from '../../../assets/Logos/html.svg';
import javascript from '../../../assets/Logos/javascript.svg';
import react from '../../../assets/Logos/react.svg';

import mongo from '../../../assets/Logos/mongo.svg';
import netcore from '../../../assets/Logos/netcore.svg';
import sql from '../../../assets/Logos/sql.svg';
import node from '../../../assets/Logos/node.svg';

import git from '../../../assets/Logos/git.png';
import scrum from '../../../assets/Logos/scrum.svg';
import macos from '../../../assets/Logos/macos.svg';

import location from '../../../assets/Logos/location.svg';
import email from '../../../assets/Logos/email.svg';
import phone from '../../../assets/Logos/phone.png';
import user from '../../../assets/Logos/user.png';

const description = 'Estudiante de Licenciatura en Análisis de Sistemas (UBA) con tres años de experiencia como desarrollador web FullStack. Soy capaz de aprender de forma constante y responsable, una persona proactiva con capacidad de adaptarse a los cambios. Siempre busco obtener el mejor resultado posible para mi equipo, aportando nuevas ideas y soluciones. Puedo captar rápidamente nuevas tecnologías y diferentes procesos.'
const FrontEndSkills = [
    {name:'JavaScript', logo:javascript},
    {name:'AngularJs', logo:angular},
    {name:'Angular 8', logo:angular},
    {name:'React', logo:react},
    {name:'HTML5', logo:html},
    {name:'CSS3', logo:css}
];

const BackEndSkills = [
    {name:'NodeJs', logo:node},
    {name:'.NET', logo:netcore},
    {name:'SQL/MySql/PostgreSQL', logo:sql},
    {name:'MongoDB', logo:mongo}];

const OtherSkills = [
    {name:'SVN/TFS/GIT', logo:git},
    {name:'Agile/Scrum/Canvas', logo:scrum},
    {name:'MacOS/Ubuntu', logo:macos},
    {name:'Photoshop', logo:angular}];
const experiences = [
	{
		companyName:'Codea IT',
		jobTitle:'Full-Stack web developer',
		from:'2019',
		to:'Actualidad',
		jobDescription:'Actualmente me encuentro desempeñando el rol de desarrollador FullStack en diferentes proyectos usando una gran variedad de tecnologías como Angular 8, React with typescript, NodeJs, NET core, mongoDB, My SQL, entre otras.',
		jobUbication:'Ciudad Autónoma de BuenosAires, Argentina',
	},
	{
		companyName:'Creative Coefficient S.R.L',
		jobTitle:'Full-Stack web developer',
		from:'2018',
		to:'2019',
		jobDescription:'Estuve, en mayor parte, tercerizado en la empresa NEC Latinoamerica desempeñando el papel de desarrollador FullStack, usando las tecnologías AngularJS, Angular 7, SQL server, .NET, entre otras. ',
		jobUbication:'Ciudad Autónoma de BuenosAires, Argentina',
	},
	{
		companyName:'Okapii',
		jobTitle:'Full-Stack web developer',
		from:'2017',
		to:'2018',
		jobDescription:'Me desempeñé como desarrollador fullstack creando sistemas intra, a medida, para diferentes clientes, usando tecnologías como AngularJS, ASP:NET y .NET SQL server',
		jobUbication:'Ciudad Autónoma de BuenosAires, Argentina',
	}
]
const contactData = [
    {name:'28 años, Argentino ', logo:user},
    {name:'(011)1556589904', logo:phone},
    {name:'mavenesio@gmail.com', logo:email},
    {name:'Palermo, CABA, Argentina', logo:location}];

const HomepageContainer = styled.div`
`;

const HeaderContainer = styled.div`
    height:25vh;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    height:80vh;
    overflow: auto;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
`;

const PrimaryColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 100%;
    flex: 1;
    padding: 1rem;
`;
const SecondaryColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 100%;
    flex: 4;
    padding: 1rem;
`;
const Image = styled.img`
    height:250px;
    width:250px;
    align-self:center;
`;
const Paragraph = styled.div`
    text-align: justify;
    text-justify: inter-word;
`;
class Homepage extends React.Component {
  
    renderSkills = (skills) => {
        return skills.map((skill, index) => {
            return (
                <SkillRating 
                    key={`${index} - ${skill.skillName}`}
                    skillLevel={skill.skillRating} 
                    skill={skill.skillName}
                    />)
        })
    }
    renderExperience = (experiences) => {
        return experiences.map(experience => {
            return (
                    <Experience
                        key={`${experience.companyName}`}
                        jobDescription={experience.jobDescription}
                        jobTitle={experience.jobTitle}
                        jobUbication={experience.jobUbication}
                        from={experience.from}
                        to={experience.to}
                        companyName={experience.companyName}
                    />
                    )
        })
    }

    render() {
        return (
            <HomepageContainer>
                <HeaderContainer>
                    <Header firstName='Mariano Andrés' lastName='Venesio Bianchi Fiorito' subTitle='Full-Stack Developer'></Header>
                </HeaderContainer>
                <BodyContainer>
                    <PrimaryColumn>
                        <Row>
                            <Card>
                                <Image src={kermit} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Datos Personales'>
                                <ContactMe data={contactData}></ContactMe>
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Front-End Skills'>
                                <SkillList data={FrontEndSkills} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Back-End Skills'>
                                <SkillList data={BackEndSkills} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Other Skills'>
                                <SkillList data={OtherSkills} />
                            </Card>
                        </Row>
                    </PrimaryColumn>
                    <SecondaryColumn>
                        <Row> 
                            <Card title='Resumen' titleColor='#32a852'>
                                <Paragraph>{description}</Paragraph>
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Experiencia' titleColor='#a83269'>
                                {this.renderExperience(experiences)}
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Educación' titleColor='#328fa8'>
                                <Paragraph>
                                    fafafa
                                </Paragraph>
                            </Card>
                        </Row>
                    </SecondaryColumn>
                </BodyContainer>
            </HomepageContainer>
        );
    }
}

export default Homepage;
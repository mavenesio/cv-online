
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molescules/Header/Header';
import ContactMe from '../../Molescules/ContactMe/ContactMe';
import Experience from '../../Molescules/Experience/Experience';
import SkillRating from '../../Atoms/SkillRating/SkillRating';
import SkillList from '../../Molescules/SkillList/SkillList';
import kermit from '../../../assets/Kermit.png';
import Card from '../../Atoms/Card/Card';

const description = 'Estudiante de Licenciatura en Análisis de Sistemas (UBA) con tres años de experiencia como desarrollador web FullStack. Soy capaz de aprender de forma constante y responsable, una persona proactiva con capacidad de adaptarse a los cambios. Siempre busco obtener el mejor resultado posible para mi equipo, aportando nuevas ideas y soluciones. Puedo captar rápidamente nuevas tecnologías y diferentes procesos.'
const FrontEndSkills = ['JavaScript','AngularJs','Angular7','HTML5','CSS3'];
const BackEndSkills = ['NodeJs','.NET','SQL/MySql/PostgreSQL','MongoDB'];
const OtherSkills = ['SVN/TFS/GIT','metodologiasagiles/Scrum/Canvas','MacOS/Ubuntu/','Photoshop'];
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
const contactData = ['28 años, Argentino ','(011)1556589904','mavenesio@gmail.com','Palermo,CABA,Argentina'];

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
    flex: 3;
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
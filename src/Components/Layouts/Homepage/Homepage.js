
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molescules/Header/Header';
import ContactMe from '../../Molescules/ContactMe/ContactMe';
import Experience from '../../Molescules/Experience/Experience';
import kermit from '../../../assets/Kermit.png';
import Card from '../../Atoms/Card/Card';
const experience = [
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
  

    renderExperience = (experiences) => {
        return experiences.map(experience => {
            return (
            <Experience
                jobDescription={experience.jobDescription}
                jobTitle={experience.jobTitle}
                jobUbication={experience.jobUbication}
                from={experience.from}
                to={experience.to}
                companyName={experience.companyName}
            />)
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
                                <ContactMe data={['28 años, Argentino ','(011)1556589904','mavenesio@gmail.com','Palermo,CABA,Argentina']}></ContactMe>
                            </Card>
                        </Row>
                    </PrimaryColumn>
                    <SecondaryColumn>
                        <Row> 
                            <Card title='Resumen' titleColor='#32a852'>
                                <Paragraph>
                                    Estudiante de Licenciatura en Análisis de Sistemas (UBA) con tres años 
                                    de experiencia como desarrollador web FullStack. 
                                    Soy capaz de aprender de forma constante y responsable, una persona proactiva 
                                    con capacidad de adaptarse a los cambios. Siempre busco obtener el mejor resultado
                                    posible para mi equipo, aportando nuevas ideas y soluciones. Puedo captar rápidamente 
                                    nuevas tecnologías y diferentes procesos. 
                                </Paragraph>
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Experiencia' titleColor='#a83269'>
                                {this.renderExperience(experience)}
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Educación' titleColor='#328fa8'>
                                <Paragraph>
                                    fafaf
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
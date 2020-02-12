import React from 'react';
import styled from 'styled-components';
import Header from '../../Molecules/Header/Header';
import Footer from '../../Molecules/Footer/Footer';
import ExperienceList from '../../Molecules/Experience/ExperienceList';
import DataList from '../../Molecules/DataList/DataList';
import Card from '../../Atoms/Card/Card';
import * as constants from '../../../constants/es-ES'


const HomepageContainer = styled.div`
    background: ${props=> props.theme.colors.background.secondary};
    background: linear-gradient(180deg, ${props=> props.theme.colors.background.primary} 0%, ${props=> props.theme.colors.background.secondary} 35%);
    display:flex;
    flex-direction:column;
    justify-content:center
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    background: ${props=> props.theme.colors.background.secondary};
    background: linear-gradient(180deg, ${props=> props.theme.colors.background.primary} 0%, ${props=> props.theme.colors.background.secondary} 35%);
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem;
`;

const PrimaryColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 15vw;
    margin-left: 4vw;
    @media (max-width: 1225px) {
        flex-basis: 50vw;
        margin-left: 10vw;
        margin-right: 10vw;
    }
    padding: 0rem 1rem 0rem 1rem;
`;
const SecondaryColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 50vw;
    margin-right: 4vw;
    @media (max-width: 1225px) {
        flex-basis: 50vw;
        margin-left: 10vw;
        margin-right: 10vw;
    }
    padding: 0rem 1rem 0rem 1rem;
`;
const Image = styled.img`
    height:auto;
    width:90%;
    border-radius:50%;
    border: black solid 2px;
`;
const Paragraph = styled.div`
    text-align:start;
`;
class Homepage extends React.Component {
  
    render() {
        return (
            <HomepageContainer>
                <Header 
                    firstName={constants.firstName}
                    lastName={constants.lastName}
                    subTitle={constants.job}
                />
                <BodyContainer>
                    <PrimaryColumn>
                        <Row>
                            <Image src={constants.profilePicture} />
                        </Row>
                        <Row>
                            <Card title='Datos Personales'>
                                <DataList data={constants.contactData}/>
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Front-End Skills'>
                                <DataList data={constants.frontEndSkills}/>
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Back-End Skills'>
                                <DataList data={constants.backEndSkills}/>
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Other Skills'>
                                <DataList data={constants.otherSkills}/>
                            </Card>
                        </Row>
                    </PrimaryColumn>
                    <SecondaryColumn>
                        <Row> 
                            <Card title='Resumen' titleColor='#32a852'>
                                <Paragraph>{constants.description}</Paragraph>
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Experiencia' titleColor='#a83269'>
                                <ExperienceList experiences={constants.experiences}/>
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Educación' titleColor='#328fa8'>
                                <ExperienceList experiences={constants.education}/>
                            </Card>
                        </Row>
                    </SecondaryColumn>
                </BodyContainer>
                <Footer
                    linkedin={constants.linkedinLink}
                    github={constants.githubLink}
                    download={constants.downloadLink}
                />
            </HomepageContainer>
        );
    }
}

export default Homepage;
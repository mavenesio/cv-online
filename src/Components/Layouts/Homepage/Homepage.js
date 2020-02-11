
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molecules/Header/Header';
import Footer from '../../Molecules/Footer/Footer';
import ExperienceList from '../../Molecules/Experience/ExperienceList';
import DataList from '../../Molecules/DataList/DataList';
import Card from '../../Atoms/Card/Card';
import * as constants from '../../../constants/es-ES'


const HomepageContainer = styled.div`
`;

const HeaderContainer = styled.div`
    height:20vh;
`;
const FooterContainer = styled.div`
    background-color:rgba(0,0,0,0.1);
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    height:80vh;
    overflow: auto;
    background: rgba(0,0,0,0.9);
    background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.1) 100%);
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
    border: black solid 5px;
    align-self:center;
`;
const Paragraph = styled.div`
    text-align: justify;
    text-justify: inter-word;
`;
class Homepage extends React.Component {
  
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
                                <Image src={constants.profilePicture} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Datos Personales'>
                                <DataList data={constants.contactData}></DataList>
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Front-End Skills'>
                                <DataList data={constants.frontEndSkills} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Back-End Skills'>
                                <DataList data={constants.backEndSkills} />
                            </Card>
                        </Row>
                        <Row>
                            <Card title='Other Skills'>
                                <DataList data={constants.otherSkills} />
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
                                <ExperienceList experiences={constants.experiences} />
                            </Card>
                        </Row>
                        <Row> 
                            <Card title='Educación' titleColor='#328fa8'>
                                <ExperienceList experiences={constants.education} />
                            </Card>
                        </Row>
                    </SecondaryColumn>
                </BodyContainer>
                <FooterContainer>
                    <Footer
                        linkedin='www.google.com'
                        github='www.google.com'
                        download='www.google.com'>
                    </Footer>
                </FooterContainer>
            </HomepageContainer>
        );
    }
}

export default Homepage;
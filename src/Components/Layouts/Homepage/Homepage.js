
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molescules/Header/Header';
import ContactMe from '../../Molescules/ContactMe/ContactMe';
import PropTypes from 'prop-types';
import profileimage from '../../../assets/profilepicture.png';
import Card from '../../Atoms/Card/Card';

const HomepageContainer = styled.div`
`;

const HeaderContainer = styled.div`
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
`;

const PrimaryColumn = styled.div `
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding: 1rem;
`;
const SecondaryColumn = styled.div`
    display: flex;
    flex-direction: column;
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

  render() {
      const {} = this.props;
    return (
        <HomepageContainer>
            <HeaderContainer>
                <Header firstName='Mariano Andrés' lastName='Venesio Bianchi Fiorito' subTitle='Full-Stack Developer'></Header>
            </HeaderContainer>
            <BodyContainer>
                <PrimaryColumn>
                    <Row>
                        <Card>
                            <Image src={profileimage} />
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <ContactMe></ContactMe>
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
                </SecondaryColumn>
            </BodyContainer>
        </HomepageContainer>
    );
  }
}
Homepage.propTypes = {
    
  }

export default Homepage;
import React from 'react';
import styled from 'styled-components';
import Header from '../../Molecules/Header/Header';
import Footer from '../../Molecules/Footer/Footer';
import LeftColumn from '../../Molecules/LeftColumn/LeftColumn';
import RightColumn from '../../Molecules/RightColumn/RightColumn';
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
const Homepage = () => {
    return (
        <HomepageContainer>
            <Header 
                firstName={constants.firstName}
                lastName={constants.lastName}
                subTitle={constants.job}
            />
            <BodyContainer>
                <LeftColumn/>
                <RightColumn/>
            </BodyContainer>
            <Footer
                linkedin={constants.linkedinLink}
                github={constants.githubLink}
                download={constants.downloadLink}
            />
        </HomepageContainer>
    );
}

export default Homepage;
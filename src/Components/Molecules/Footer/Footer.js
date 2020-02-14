import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    margin-top:2rem;
    background-color: ${props=> props.theme.colors.background.secondary};
`;
const SocialMediaButton = styled.a`
    padding:2rem;
`;
const renderFooter = (data) => {
    return data.map( section => {
            return (
                <SocialMediaButton href={section.link} target="_blank" key={section.icon}>
                    <img 
                        src={section.icon} 
                        alt=""
                        height='50'
                        width='50'
                    />
                </SocialMediaButton>
            )
        }
    );
} 

const Footer = (props) => {
    return (
        <FooterContainer>
            { props.data && renderFooter(props.data)}
        </FooterContainer>
    );
}
Footer.propTypes = {
    data: PropTypes.array.isRequired,
  }

export default Footer;
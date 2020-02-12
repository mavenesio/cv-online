import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    background: ${props=> props.theme.colors.background.primary};
    z-index: 1000;
`;
const HeaderName = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;
const HeaderFirstname = styled.h1`
    margin:1rem 0rem 1rem 1rem;
    font-size: 4.5vw;
    font-weight:300;
    color: white;
`;
const HeaderLastname = styled.h1`
    margin:1rem 1rem 1rem 0rem;
    font-size: 4.5vw;
    font-weight:700;
    color: white;
`;

const HeaderSubtitle = styled.h3`
    font-size: 2.5vw;    
    margin-top: unset;   
    margin-bottom: unset;
    color:white;
`;

class Header extends React.Component {
    
    render() {
        const {firstName, lastName, subTitle} = this.props;
        return (
            <HeaderContainer>
                <HeaderName>
                    <HeaderFirstname>
                        {firstName},
                    </HeaderFirstname>
                    <HeaderLastname>
                        {lastName}
                    </HeaderLastname>
                </HeaderName>
                <HeaderSubtitle>
                        {subTitle}
                </HeaderSubtitle>
            </HeaderContainer>
        );
    }
}
Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    subTitle: PropTypes.string,
  }

export default Header;
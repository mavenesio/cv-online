import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom:2rem;
    color: ${props=> props.theme.colors.font.primary};
    background: ${props=> props.theme.colors.background.primary};
`;
const HeaderName = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;
const HeaderFirstname = styled.h1`
    margin:1rem 0rem 1rem 1rem;
    font-size: ${props=> props.theme.fontSizes.header};
    font-weight:${props=> props.theme.fontWeight.normal};
`;
const HeaderLastname = styled.h1`
    margin:1rem 1rem 1rem 0rem;
    font-size: ${props=> props.theme.fontSizes.header};
    font-weight:${props=> props.theme.fontWeight.bold};
`;

const HeaderSubtitle = styled.h3`
    font-size: ${props=> props.theme.fontSizes.headerSubtitle};
    margin-top: unset;   
    margin-bottom: unset;
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderName>
                <HeaderFirstname>
                    {props.firstName},
                </HeaderFirstname>
                <HeaderLastname>
                    {props.lastName}
                </HeaderLastname>
            </HeaderName>
            <HeaderSubtitle>
                    {props.subTitle}
            </HeaderSubtitle>
        </HeaderContainer>
    );
}
Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    subTitle: PropTypes.string,
}
export default Header;
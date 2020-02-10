import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    background: rgba(0,0,0,0.9);
    display: flex;
    height:20vh;
    flex-direction:column;
`;
const HeaderName = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;
const HeaderFirstname = styled.h1`
    margin:1rem;
    font-size: 50px;
    font-weight:300;
    color: white;
`;
const HeaderLastname = styled.h1`
    margin:1rem;
    font-size: 50px;
    font-weight:700;
    color: white;
`;

const HeaderSubtitle = styled.h3`
    font-size: 30px;    
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
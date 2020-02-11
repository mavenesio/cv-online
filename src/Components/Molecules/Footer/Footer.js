import React from 'react';
import styled from 'styled-components';
import * as constants from '../../../constants/es-ES'
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
`;

const SocialMediaButton = styled.a`
    padding:2rem;

`;


class Header extends React.Component {
  render() {
      const {linkedin, github, download} = this.props;
    return (
        <HeaderContainer>
            <SocialMediaButton href={linkedin} target="_blank">
                <img 
                    src={constants.linkedin} 
                    alt=""
                    height='50'
                    width='50'
                />
            </SocialMediaButton>
            <SocialMediaButton href={github} target="_blank"> 
                <img 
                    src={constants.github}
                    alt=""
                    height='50'
                    width='50'
                />
            </SocialMediaButton>
            <SocialMediaButton href={download} target="_blank">
                <img 
                    src={constants.download}
                    alt=""
                    height='50'
                    width='50'
                />
            </SocialMediaButton>
        </HeaderContainer>
    );
  }
}
Header.propTypes = {
    linkedin: PropTypes.string,
    github: PropTypes.string,
    download: PropTypes.string,
  }

export default Header;
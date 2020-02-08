import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
    box-shadow: 4px 8px 8px 4px rgba(0,0,0,0.2);
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    background-color: white;
    display: flex;
    padding: 2rem;
    height:100%;
    width:100%;
    flex-direction:column;
`;
const TittleContainer = styled.div`
    display:flex;
    flex-direction:row;
`;
const ColorTitle = styled.h1`
    color: ${props => props.titleColor}
`;

class Card extends React.Component {
  render() {
    const {title, titleColor} = this.props;
    return (
        <CardContainer>
        {title && 
            <TittleContainer>
                <ColorTitle titleColor={titleColor}> {title.substr(0,3)}</ColorTitle>
                <h1> {title.substr(3,title.length)}</h1>
            </TittleContainer>
        }
            {this.props.children}
        </CardContainer>
    );
  }
}
Card.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
  }

export default Card;
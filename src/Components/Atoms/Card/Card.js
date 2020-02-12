import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
    box-shadow: 4px 20px 20px 4px rgba(0,0,0,0.7);
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    background-color: white;
    display: flex;
    padding: 1rem 2rem 2rem 2rem;
    width:100%;
    flex-direction:column;
`;
const TittleContainer = styled.div`
    display:flex;
    flex-direction:row;
`;
const ColorTitle = styled.h1`
    margin-top:unset;
    color: ${props => props.titleColor}
`;
const ColorlessTitle = styled.h1`
    margin-top:unset;
`;

class Card extends React.Component {
  render() {
    const {title, titleColor} = this.props;
    return (
        <CardContainer>
        {title && 
            <TittleContainer>
                <ColorTitle titleColor={(titleColor===undefined)? 'black' : titleColor}> {title.substr(0,3)}</ColorTitle>
                <ColorlessTitle> {title.substr(3,title.length)}</ColorlessTitle>
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
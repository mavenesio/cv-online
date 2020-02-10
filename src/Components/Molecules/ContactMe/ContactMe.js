
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactMeContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const ContactMeWrapper = styled.div`
  display:flex;
  flex-direction:row;
`;
const Data = styled.div`
  font-size:20px;
  padding-left:0.5rem;
  padding-bottom:1rem;
`;

class ContactMe extends React.Component {

  renderData = () => {    
    return this.props.data.map((fact,index) => {
      return (
        <ContactMeWrapper>
          <img src={fact.logo}  
            height='30' 
            width='30'
            alt={fact.name}
          />
          <Data key={index+fact.name} >{fact.name}</Data>
        </ContactMeWrapper>)
        } 
      )
  } 
  render() {
    return (
        <ContactMeContainer>
            {this.renderData()}
        </ContactMeContainer>
    );
  }
}
ContactMe.propTypes = {
    data: PropTypes.array.isRequired
  }

export default ContactMe;

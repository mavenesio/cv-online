
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactmeContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const Data = styled.div`
    align-self:flex-end;
`;

class Contactme extends React.Component {

  renderData = () => {
    return this.props.data.map((fact,index) => {return <Data key={index+fact} >{fact}</Data>} )
  } 
  render() {
    return (
        <ContactmeContainer>
            {this.renderData()}
        </ContactmeContainer>
    );
  }
}
Contactme.propTypes = {
    data: PropTypes.array.isRequired
  }

export default Contactme;

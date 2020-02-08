
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

  render() {
      const {} = this.props;
    return (
        <ContactmeContainer>
            <Data>28 años, Argentino </Data>
            <Data>(011)1556589904</Data>
            <Data>mavenesio@gmail.com</Data>
            <Data>Palermo,CABA,Argentina</Data>
        </ContactmeContainer>
    );
  }
}
Contactme.propTypes = {
    
  }

export default Contactme;
